import anime from "animejs";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CommonAboutUs } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { ROUTES } from "../../Common/Globals";
import { unhideAllPagePopupForm } from "../../Store/Slices/App/AppSlice";
import "./FAQs.scss";

let transYRegex = /\.*translateY\((.*)px\)/i;
let cardPanelBottomMargin = 10; // in pixel

interface ExpandableDivParams {
    id: number,
    heading: string;
    content: React.ReactNode;
}
const ExpandableDiv = ({heading, content, id}: ExpandableDivParams) => {

    const [active, setActive] = useState(false);
    const [lastWindowWidth, setLastWindowWidth] = useState<number | null>(null);
    const expandableDivContentRef = useRef<HTMLDivElement>(null);
    const expandableDivContentInnerRef = useRef<HTMLDivElement>(null);
    const expandableDivHeadingRef = useRef<HTMLDivElement>(null);

    const animation = useCallback(() => {
        if (!expandableDivContentInnerRef.current) return;
        if (active) {
            anime({
                targets: expandableDivContentRef.current,
                height: [
                    {value: expandableDivContentInnerRef.current.scrollHeight+"px", duration: 0, delay: 0},
                    {value: 0, duration: 300, delay: 0},
                ],
                opacity: [
                    {value: 1, duration: 0, delay: 0},
                ],
                easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
            });
        }
        else {
            anime({
                targets: expandableDivContentRef.current,
                height: [
                    {value: 0, duration: 0, delay: 0},
                    {value: expandableDivContentInnerRef.current.scrollHeight+"px", duration: 300, delay: 0},
                ],
                opacity: [
                    {value: 1, duration: 0, delay: 0}
                ],
                easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
                autoPlay: false,
            });
        }
    }, [active]);

    const toggleActive = useCallback ( () => {
        if (expandableDivContentRef.current) {
            // get the height of the clicked div (with padding)
            let scrollHeight = expandableDivContentRef.current.scrollHeight;
            // get the next sibling of that div
            let nextSibling = expandableDivContentRef.current.parentElement!.nextElementSibling as HTMLDivElement;
            // get the last sibling of the clicked div
            let lastSibling = nextSibling?.parentElement?.querySelector(".expandable-div:last-of-type") as HTMLDivElement;
            // iterate till all divs placed after clicked div are moved
            while(nextSibling) {
                let transY = transYRegex.exec(nextSibling.style.transform);
                let transYVal = (transY)? parseInt(transY[1]):0;

                if (active) {
                    nextSibling.style.transform = "translateY(" + (transYVal - scrollHeight) + "px)";
                }
                else {
                    nextSibling.style.transform = "translateY(" + (transYVal + scrollHeight) + "px)";
                }
                nextSibling = nextSibling.nextElementSibling as HTMLDivElement;
            }
            // if last sibling is not present then the clicked div is the last div
            if (!lastSibling) {
                lastSibling = expandableDivContentRef.current.parentElement! as HTMLDivElement;
            }
            if (active) {
                // to future devs: please dont mess with math!!!
                let marginBottom = (lastSibling.style.marginBottom.replace(/\D/g,''))?
                                        parseInt(lastSibling.style.marginBottom.replace(/\D/g,'')):0;
                lastSibling.style.marginBottom = (marginBottom - scrollHeight) + "px";
                if (expandableDivHeadingRef.current) {
                    expandableDivHeadingRef.current.classList.remove("active");
                }
            }
            else {
                // to future devs: please dont mess with math!!!
                let marginBottom = (lastSibling.style.marginBottom.replace(/\D/g,''))?
                                        parseInt(lastSibling.style.marginBottom.replace(/\D/g,'')) - cardPanelBottomMargin:0;
                lastSibling.style.marginBottom = (scrollHeight + marginBottom + cardPanelBottomMargin) + "px";
                if (expandableDivHeadingRef && expandableDivHeadingRef.current) {
                    expandableDivHeadingRef.current.classList.add("active");
                }
            }
        }
        animation();
        setActive( !active );
    }, [active, animation])

    const resizeContentDiv = useCallback(() => {
        if (expandableDivHeadingRef.current && expandableDivContentRef.current && expandableDivContentInnerRef.current) {
            expandableDivContentRef.current.style.width = expandableDivHeadingRef.current.offsetWidth + "px";
        }
    }, [])

    const makeZeroHeight = () => {
        if (expandableDivContentRef.current) {
            expandableDivContentRef.current.style.height = "0px";
        } 
    }

    const reset = useCallback(() => {
        if (lastWindowWidth === null) {
            setLastWindowWidth(window.innerWidth);
            makeZeroHeight();
            return;
        }
        let winWidth = lastWindowWidth? lastWindowWidth : window.innerWidth;

        if (winWidth === window.innerWidth) {
            return;
        }

        makeZeroHeight();
        if (expandableDivContentRef.current && expandableDivContentInnerRef.current) {
            // get the next sibling of that div
            let nextSibling = expandableDivContentRef.current.parentElement!.nextElementSibling as HTMLDivElement;
            // get the last sibling of the clicked div
            let lastSibling = nextSibling?.parentElement?.querySelector(".expandable-div:last-of-type") as HTMLDivElement;
            // iterate till all divs placed after clicked div are moved
            while(nextSibling) {
                nextSibling.style.transform = "translateY(0px)";
                nextSibling = nextSibling.nextElementSibling as HTMLDivElement;
            }
            // if last sibling is not present then the clicked div is the last div
            if (!lastSibling) {
                lastSibling = expandableDivContentRef.current.parentElement! as HTMLDivElement;
            }
            lastSibling.style.marginBottom = "10px";
            if (expandableDivHeadingRef.current) {
                expandableDivHeadingRef.current.classList.remove("active");
            }
        }
        setActive(false);
    }, [lastWindowWidth])

    useEffect(() => {
        if (expandableDivHeadingRef && expandableDivHeadingRef.current) {
            expandableDivHeadingRef.current.classList.remove("active");
        }
        resizeContentDiv();
        reset();

        window.addEventListener("resize", resizeContentDiv);
        window.addEventListener("resize", reset);
        return () => {
            window.removeEventListener("resize", resizeContentDiv)
            window.removeEventListener("resize", reset)
        };
    }, [resizeContentDiv, reset]);

    return (
        <div className={"expandable-div card-panel"}>
            <div className={"expandable-div-heading-div"} onClick={toggleActive}  ref={expandableDivHeadingRef}>
                <div className={"col-wrapper-12"}>
                    <div className={"mb-col-10 t-col-11 d-col-11"}>
                        <p>{heading}</p>
                    </div>
                    <div className={"mb-col-2 t-col-1 d-col-1"}>
                        <p className={""}><i className={"material-icons"}>expand_more</i></p>
                    </div>
                </div>
            </div>
            <div className={"expandable-div-content-div"} ref={expandableDivContentRef}>
                <div className={"expandable-div-content-div-inner"} ref={expandableDivContentInnerRef}>
                    <div className={"col-wrapper-12"}>
                        <div className={"col-12"}>
                            <div className={"expandable-div-content-para"}>
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Faq = () => {
    const dispatch = useDispatch();
    const unhidePopupModal = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(unhideAllPagePopupForm());
    }, [dispatch]);

    const [expandableDivsFirst, setExpandableDivsFirst] = useState<JSX.Element[]>([])
    const [expandableDivsSecond, setExpandableDivsSecond] = useState<JSX.Element[]>([])

    useEffect(() => {
        const expandableDivData: ExpandableDivParams[] = [
            {
                id: 1,
                heading: "When was AIMS IBS Established?",
                content: (
                    <>
                        <p>AIMS IBS Bangalore is the passionate child of IBMR Group of Institutions which was established in 1999 and now admitting students for 21st Batch. AIMS IBS offers unique Industry Integrated Management Education emphasising on Practical learning.</p>
                    </>
                ),
            },
            {
                id: 2,
                heading: "How Many Campuses in India?",
                content: (
                    <>
                        <p>4 Campuses (Bangalore, Hubli, Ahmedabad, Gurgaon)</p>
                    </>
                ),
            },
            {
                id: 3,
                heading: "What about International Association?",
                content: (
                    <>
                        <p>University of Stirling, UK</p>
                        <p>IAE Business Graduate Grenoble, France</p>
                        <p>IAE Bordeaux University, France</p>
                        <p>Staffordshire University, UK</p>
                        <p>Singapore Human Resource Institute, Singapore</p>
                        <p>Singapore Institute of Management, Singapore</p>
                        <p>James Cook University, Singapore</p>
                    </>
                ),
            },
            {
                id: 4,
                heading: "What about ranking and reputation?",
                content: (
                    <>
                        <p>Ranked among Top 20 B Schools in South India by Times of India B School Survey</p>
                        <p>AWARDED AS ASIA’S BEST EMERGING BUSINESS SCHOOL BY WORLD EDUCATION CONG.. & CMO ASIA</p>
                        <p>RANKED 26TH BY BUSINESS BARON SURVEY</p>
                        <p>INDIA’S 1st SCHOOL TO OFFER INDUSTRY INTEGRATED MBA</p>
                        <p>17TH BEST FOR RETURN ON INVESTMENT IN INDIA</p>
                        <p>ALUMNI WORKING IN 23 CITIES & 13 COUNTRIES</p>
                        <p>4TH BEST FOR HIGHEST SALARY IN SOUTH INDIA</p>
                        <p>18TH BEST FOR HIGHEST AVERAGE SALARIES</p>
                        <p>90+ WORKING INDUSTRY EXPERTS ON BOARD</p>
                        <p>8000+ ALUMNI</p>
                        <p>4TH BEST FOR HIGHEST OVERALL SALARY</p>
                        <p>7 PARTNER INSTITUTIONS IN 3 COUNTRIES</p>
                        <p>225 STRONG FACULTY & TRAINERS</p>
                    </>
                ),
            },
            {
                id: 5,
                heading: "What about program approvals and university associations?",
                content: (
                    <>
                        <p>MBA program offered is approved by Bangalore University, AICTE, UGC, Ministry of HRD and Govt. of India. AIMS IBS is also associated with the University of Mysore & Bharathiar University, Coimbatore These universities are reputed state/public universities.</p>
                    </>
                ),
            },
            {
                id: 6,
                heading: "Tell me more about faculty?",
                content: (
                    <>
                        <p>AIMS IBS believes in bringing Industry legends to train students and more than 80% of our faculty members are from Industry with specialised experiences. AIMS IBS is the only B School to have Industry/Corporate Council to Mentor our students on One to One basis. We also invite reputed international professors who visit and deliver a course or part of course and also senior resource persons from IIM’s /IIT’s and reputed Industry bodies.</p>
                        <p>AIMS IBS takes initiation for Faculty Exchange Programs where in some of our faculty who have rich experience in diverse areas from industry and academia visit foreign universities to teach courses in Entrepreneurship, Project Management, Global Service Industry etc. These faculty bring back wealth of knowledge and experience and share the same with students. AIMS IBS also invites leading professors from reputed foreign B Schools to deliver the modular courses.</p>
                        <p> For more details. <Link to={ROUTES["FACULTY"]}>Click Here</Link></p>
                    </>
                ),
            },
            {
                id: 7,
                heading: "What are intakes in a year and when is batch commencement ?",
                content: (
                    <>
                        <p>Intake: Total intake is 120 (2 batches of 60 Each).Batch will commence in July/August Month.</p>
                    </>
                ),
            },
            {
                id: 8,
                heading: "What is the course fees & what it includes?",
                content: (
                    <>
                        <p>For details on fee structure please contact <a href="tel:+91-7847843111">+91-7847843111</a> / <a href="tel:+91-7795852804">7795852804</a> or Click below link to drop your details so that our team will get in touch with you</p>
                        <p>Click here to <a href={"#!"} onClick={unhidePopupModal}>Apply Online</a></p>
                    </>
                ),
            },
            {
                id: 9,
                heading: "What about hostel facility and hostel fees?",
                content: (
                    <>
                        <p>Institute provides Hostel (Accommodation ONLY) facility for the eligible Scholarship students. The college is located in the prime area with plenty of options for student accommodation as Paying Guest / Hostels etc. Institute is also associated with few very good hostels for additional student support.</p>
                    </>
                ),
            },
            {
                id: 10,
                heading: "Tell me about instalment options?",
                content: (
                    <>
                        <p>Students can contact respective admission officer for details on payment options</p>
                    </>
                ),
            },
            {
                id: 11,
                heading: "How to apply for the program?",
                content: (
                    <>
                        <p>We accept applications online and you are advised to apply online.</p>
                        <p>Click here to <a href={"#!"} onClick={unhidePopupModal}>Apply Online</a></p>
                    </>
                ),
            },
            {
                id: 12,
                heading: "Do I need to pay any fees for applying?",
                content: (
                    <>
                        <p>For the application and admission process, there are no charges.</p>
                    </>
                ),
            },
            {
                id: 13,
                heading: "What is the selection process?",
                content: (
                    <>
                        <p>Selection is based on Application, Written Test Score and Performance in GD / Interview.</p>
                        <p><Link to={ROUTES["ADMISSION PROCESS"]}>Click Here</Link> for detailed admission process</p>
                    </>
                ),
            },
            {
                id: 14,
                heading: "What about Study Loan?",
                content: (
                    <>
                        <p>Study loan support will be offered to all eligible candidates by providing necessary documents and guidance to students. Most of the nationalized and private banks have been providing loans to our students. Once you confirm your admission, our team will guide you in the education loan process.</p>
                    </>
                ),
            },
            {
                id: 15,
                heading: "What about Placements & Internships ?",
                content: (
                    <>
                        <p>AIMS IBS group has a history of strong relation with leading business organizations, and we continue to reinforce these affiliations and expand our corporate partnerships.AIMS IBS students are placed in the best of Indian and Global corporates and are scripting their own success stories.AIMS IBS students have done the institution proud by scaling new heights of success in their careers in companies across the country.</p>
                        <p>More than 90 plus leading companies participate in the placement process, both On Campus and Off campus. Students from AIMS IBS have been chosen by Companies for various roles starting from Management Trainee to Middle Management positions. The most of these companies offered to AIMS IBS students were from various sectors like Finance, Consulting, IT, Sales & Marketing, Education, KPO’s, Healthcare, Infrastructure, Real Estate, Media, Travel, and Energy.</p>
                        <p>AIMS IBS is India’s 1st and Only B school to offer Industry Integrated MBA and has a record of the average salary of 5.5 lakh P.A and highest of 10.5 Lakh P.A. More than 7000 alumni are currently working in 13 countries and 22 cities across 3900 plus top companies. Since inception AIMS IBS has unmatched placement records, satisfied and successful students.</p>
                        <p><Link to={ROUTES["PLACEMENT INSIGHTS"]}>Click Here</Link> for more details on placements</p>
                        <p><Link to={ROUTES["INTERNSHIP INSIGHTS"]}>Click Here</Link> for more details on internships</p>
                    </>
                ),
            },
            {
                id: 16,
                heading: "What is Industry Integrated Program?",
                content: (
                    <>
                        <p>The MBA along with value-added Industry Integrated training is planned in a unique way, which includes the prescribed curriculum of the University and additional value-add modules, which are designed by AIMS IBS and based on industry needs.</p>
                        <p>This makes the subject of study comprehensive, current and industry-relevant. Industry Integrated program is the right blend of Profile Mapping, Skill Gap Analysis, Expectations Management, Industry Capstone Projects, Internship, SWOT analysis and specialized mentoring and training by industry mentors. The program offers Live project for each subject taught.</p>
                        <p>For more details <Link to={ROUTES["INDUSTRY INTEGRATED PROGRAM"]}>Click Here</Link></p>
                    </>
                ),
            },
            {
                id: 17,
                heading: "What about International Exchange program?",
                content: (
                    <>
                        <p>As part of global exposure, AIMS IBS offers unique opportunities for students where students can opt to be a part of certification and exchange program with our partner universities in the US, UK & Singapore. These certifications offered during an exchange program carry the required relevance for employability and career. Till date many students have taken the best advantage of these programs to enhance their profile and career.</p>
                    </>
                ),
            },
            {
                id: 18,
                heading: "What about International internships and industry visits?",
                content: (
                    <>
                        <p>Foreign internships are exclusive opportunities for AIMS IBS students wherein selected students will have a chance to do their internship in MNC’s. The opportunity offers a chance to understand and work with MNC’s in respective countries. International industrial/exposure visits are exclusive trips arranged by AIMS IBS which takes care of offering exposure to international destinies, industrial perspective, and educational systems.</p>
                    </>
                ),
            },
            {
                id: 19,
                heading: "Tell me about Campus and Infrastructure",
                content: (
                    <>
                        <p>It's a beautiful Campus located in one of the most happening and prime areas of Bangalore amidst Electronic city and Bommasandra Industrial estate. Its proximity to several thousand renowned MNCs including Infosys, Wipro, Biocon, HCL and many more makes it the most sought after B School in Bangalore. Connected well with BMTC Bus Service, Metro station coming up and Elevated Highway, it is well equipped with State-of-the-Infrastructure facility. High tech class rooms, a lively Cafeteria, garden n lounge and playground nearby makes the vicinity more vibrant and joyous thus enhances learning creating tranquil environment and life changing experience</p>
                    </>
                ),
            },
            {
                id: 20,
                heading: "What is the advantage of doing additional certification courses through PGPM?",
                content: (
                    <>
                        <p>PGPM degree endorsed by corporate panel helps students to get an extra mileage interns of Industry acceptance for employability. It also opens gateway to multiple opportunities with specific skillsets. Companies will be happy to recruit our students as they find greater value in hiring Trained and skilled Manpower not just MBAs. Most important advantage is that, since U r trained with additional certification, your profile will be unique helping you to grow faster.</p>
                    </>
                ),
            },
            {
                id: 21,
                heading: "What about Fee refund?",
                content: (
                    <>
                        <p>As per the policy of the institute Admission fees once paid is Nonadjustable and Non-refundable. Students seeking refund of fees are advised to meet Director Admission in person with Application and valid documents. However decision on refund depends solely on Management decision. Institute pledges to work towards student development plans and bonds itself with creating life changing opportunities for them.</p>
                    </>
                ),
            },
        ];

        const expandableDivDataSecond = expandableDivData.splice(expandableDivData.length / 2);

        const _expandableDivsFirst = expandableDivData.map((expandableDiv, index) => {
            return (
                <ExpandableDiv id={expandableDiv.id} content={expandableDiv.content} heading={expandableDiv.heading} key={expandableDiv.id}/>
            )
        })
        const _expandableDivsSecond = expandableDivDataSecond.map((expandableDiv, index) => {
            return (
                <ExpandableDiv id={expandableDiv.id} content={expandableDiv.content} heading={expandableDiv.heading} key={expandableDiv.id}/>
            )
        })

        setExpandableDivsFirst(_expandableDivsFirst);
        setExpandableDivsSecond(_expandableDivsSecond);
    }, [unhidePopupModal]);

    return (
        <>
            <div className={"faq"}>
                <div className={"faq-popular-question"}>
                    <div className={"col-wrapper-12"}>
                        <div className={"mb-col-12 t-col-6 d-col-6"}>
                            { expandableDivsFirst}
                        </div>
                        <div className={"mb-col-12 t-col-6 d-col-6"}>
                            {expandableDivsSecond}
                        </div>
                    </div>
                </div>
            </div>
        </>
   )
}

const FAQs = () => {
    return (
        <>
            <Helmet>
                <title>FAQ - AIMS IBS</title>
                <meta name="description" content="FAQ"/>
            </Helmet>
            <PageLocation img={CommonAboutUs} locations={["HOME", "FAQ"]} title={"FAQ"}/>
            <div className={"faqs"}>
                <h4 className={"heading"}>Frequently Asked Questions</h4>
                <div className={"content"}>
                    <p>
                        Here you find a summary of the frequently asked questions by students.
                        If you have any other question please feel free to contact us!
                        We will be happy to give you the relevant information you need about AIMS IBS
                    </p>
                </div>
                <Faq />
            </div>
        </>
    )
}

export default FAQs;