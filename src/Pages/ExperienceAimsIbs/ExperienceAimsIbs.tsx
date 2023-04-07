import { 
    CommonExpereince,
    ExperienceAimsIbsAnIdealEnvironment, ExperienceAimsIbsAssessment, ExperienceAimsIbsCareerCounselingAndPlacementSupport,
    ExperienceAimsIbsFaculty, ExperienceAimsIbsForeignIndustryVisits, ExperienceAimsIbsProgrammeContent,
    ExperienceAimsIbsProgrammeDelivery, ExperienceAimsIbsStudentProfile,
 } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { BoxedJSXCards, IBoxedJSXCard, IBoxedJSXCards, IImage, JSXModal } from "../../Utils/js/Utils";

import React, { useCallback, useMemo, useState } from "react";
import "./ExperienceAimsIbs.scss";
import { Helmet } from "react-helmet-async";

interface ICard {
    heading: string, shortContent: React.ReactNode, content: React.ReactNode, isImggRight?: boolean,
    img: IImage,
}
const Card = ({content, heading, shortContent, img, isImggRight = false}: ICard) => {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = useCallback(() => {
        setIsShown(!isShown);
    }, [isShown]);
    
    return (
        <>
            <div className={"experience-card"}>
                <div className={"card-panel"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-8 d-col-6"}>
                            <div className={"img-div"}>
                            <picture>
                                {img.webp && <source type={"image/webp"} srcSet={img.webp}/>}
                                {
                                    img.type === "jpg" && <img src={img.jpg} alt={img.alt} width={img.w} height={img.h} />
                                }
                                {
                                    img.type === "png" && <img src={img.png} alt={img.alt} width={img.w} height={img.h} />
                                }                        
                            </picture>
                            </div>
                        </div>
                        <div className={"mb-col-24 t-col-16 d-col-18"}>
                            <h6 className={"heading"}>{heading}</h6>
                            <div className={"short-content"}>
                                {shortContent}
                            </div>
                            {
                                content && 
                                    <>
                                        <div className={"modal-trigger-button"}>
                                            <button className={"button bg-deep-orange-600"} onClick={toggleShown}>KNOW MORE</button>
                                        </div>
                                        <JSXModal toggleCallback={toggleShown} isShown={isShown}>
                                            {content}
                                        </JSXModal>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Cards = () => {

    const cardData = useMemo(() => {
        return [
            {
                img: ExperienceAimsIbsAnIdealEnvironment, isImggRight: false,
                shortContent: (
                    <>
                        <p>The infrastructure is spread over the four campuses and has a capacity to house over 1000 students with an annual intake of over 500 students. Institute has over 90 academic faculty and research staff, affording a very congenial student – faculty ratio. The rigour of the management programmes are comparable to the best in the country, and have a sharp focus on achieving excellence. Students get to enhance their skills through a host of co-curricular activities, which are partnered with business, trade both nationally and internationally.</p>
                    </>
                ),
                heading: "An Ideal Environment",
            },
            {
                img: ExperienceAimsIbsFaculty, isImggRight: false,
                shortContent: (
                    <>
                        <p>AIMS IBS believes in bringing Industry legends to train students and more than 80% of our faculty members are from Industry with specialised experiences. AIMS IBS is the only B School to have Industry/Corporate Council to Mentor our students on One to One basis. We also invite reputed international professors who will visit and deliver a course or part of course and also senior resource persons from IIM’s /IIT’s and reputed Industry bodies.</p>
                        <p>Institute takes initiation for Faculty Exchange Programs where in some of our faculty who have rich experience in diverse areas from industry and academia visit foreign universities to teach courses in Entrepreneurship, Project Management, Global Service Industry etc. These faculties bring back wealth of knowledge and experience and share the same with students. AIMS IBS also invites leading professors from reputed foreign B Schools to deliver the modular courses.</p>
                    </>
                ),
                heading: "Faculty",
            },
            {
                img: ExperienceAimsIbsStudentProfile, isImggRight: false,
                shortContent: (
                    <>
                        <p>Our rigorous selection process – spear-headed by an expert panel – ensures intake of students with high academic and all-round capability. Our student selection is based purely on merit and our pan-India presence brings together students who reflect diverse races, gender, culture and nationality, lending the institution a multi-cultural learning environment. Each batch at AIMS IBS is right mix of students from more than 18 states and various educations backgrounds and work experience.</p>
                    </>
                ),
                heading: "Student Profile",
            },
            {
                img: ExperienceAimsIbsProgrammeContent, isImggRight: false,
                shortContent: (
                    <>
                        <p>The dual degree program of MBA with a PGPM is planned in a unique way, which includes the prescribed curriculum of the University and additional value-add modules, which are designed by institute. This makes the subjects of study comprehensive, current and industry-relevant.</p>
                        <p>AIMS IBS enables its students to graduate with an MBA, in two years of study along with one of its kind Industry Integrated Program in India. The program provides a two-fold advantage to the students in acquiring a recognized degree from a University and Industry-Integrated training required by the industry. </p>
                    </>
                ),
                content: (
                    <>
                        <p>This is done with the objective of providing a university-based learning program and the second to reach beyond the curriculum of the University. This innovative Program has gained ready acceptance by the industry, which is looking for contemporary learning and ready-to-perform managers with multiple skill sets.</p>
                        <p>AIMS IBS offers 2 Year MBA along with its flagship Industry Integrated Program. The program is designed and structured to meet the industry requirements considering the contemporary needs of the job market. The industry-integrated concept being unique & focuses on Profile mapping, skill gap analysis, industry analysis and training the students the way industry expects.</p>
                        <p>Global Exposure opportunities are part of the program which will give options to students for International Exchange and Internship program.</p>
                    </>
                ),
                heading: "Programme Content",
            },
            {
                img: ExperienceAimsIbsProgrammeDelivery, isImggRight: false,
                shortContent: (
                    <>
                        <p>A rigorous classroom lecture approach, with Group discussions, lecture-based learning, case studies, tutorials, and audio-visual presentations ensure a strong academic rigor for the students. Students also get the opportunity to interact with practicing managers who are invited for guest lectures. The intensive project done at an individual level by students demand both strong as well as individual effort from students.</p>
                    </>
                ),
                content: (
                    <>
                        <p>The MBA along with value-added Industry Integrated training is planned in a unique way, which includes the prescribed curriculum of the University and additional value-add modules, which are designed at AIMS IBS and based on industry needs. This makes the subjects of study comprehensive, current and industry-relevant. Industry Integrated program is</p>
                        <div className="stepper-v-w">
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>Right blend of Profile Mapping</p>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>Skill Gap Analysis</p>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>Expectations Management</p>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>2 Industry Projects</p>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>Course based Live projects every semester</p>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>3 Months Internship and</p>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <p>The specialized mentoring and training by industry mentors.</p>
                            </div>
                        </div>
                    </>
                ),
                heading: "Programme Delivery",
            },
            {
                img: ExperienceAimsIbsAssessment, isImggRight: false,
                shortContent: (
                    <>
                        <p>A stringent process which evaluates coursework along with a number of tests, assignments and examinations in addition to an integrative project in the final year ensures a top class turnout of students. Assessment at AIMS IBS is unique and believes in continuous assessment system and tracking the students’ progress on regular basis based on set criteria. The assessment system is in line with industry expectations and skill gap analysis model. </p>
                    </>
                ),
                heading: "Assessment",
            },
            {
                img: ExperienceAimsIbsForeignIndustryVisits, isImggRight: false,
                shortContent: (
                    <>
                        <p>The student of AIMS IBS is exposed to the world with opportunities to move offshore for extensive international learning to various countries like Singapore, Malaysia, China, Japan, and Europe. Deserving students also are sent to these countries on internships and exchange programs. These programs are geared to helping them understanding international business and management practices, giving them a global exposure.</p>
                    </>
                ),
                content: (
                    <>
                        <p>AIMS IBS offers various global exposure opportunities as mentioned below</p>
                        <div className="stepper-v-w">
                            <div className="stepper-v">
                                <div className=""></div>
                                <div className={"stepper-content"}>
                                    <h6 className={"stepper-heading"}>International Industrial/Exposure visits</h6>
                                    <p>AIMS IBS organises exclusive trips which takes care of offering an exposure to international destiny’s, industrial perspective and educational systems.</p>
                                </div>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <div className={"stepper-content"}>
                                    <h6 className={"stepper-heading"}>Foreign Internships</h6>
                                    <p>AIMS IBS offers exclusive opportunities for students wherein selected students will have a chance to do their internship in MNC’s of selected Countries. The opportunity offers chance to understand and work with MNC’s in respective countries.</p>
                                </div>
                            </div>
                            <div className="stepper-v">
                                <div className=""></div>
                                <div className="stepper-content">
                                    <h6 className={"stepper-heading"}>Student Exchange Programs</h6>
                                    <p> AIMS IBS offers value adding opportunities to students and these exchange programs offer great learning and cross cultural experiences. The programs are offered in different countries and opportunities are limited to selected candidates.</p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                heading: "Foreign Industry Visits change as International Exposure",
            },
            {
                img: ExperienceAimsIbsCareerCounselingAndPlacementSupport, isImggRight: false,
                shortContent: (
                    <>
                        <p>AIMS IBS has an extra-ordinary record of placing students in prime positions with prestigious companies in India and abroad. The focused efforts made during the study period enables students to have a professional outlook and a clear view of the choice of career. With strong networking with the industry, institute gives an advantage to the students so they can set forth into the industry with confidence and purpose.</p>
                    </>
                ),
                heading: "Career Counselling and Placement Support",
            },
        ] as ICard[];
    }, []);

    const cardsJSX = useMemo(() => {
        return cardData.map((u, i)=>{
            return <Card {...u}/>
        })
    }, [cardData])

    return (
        <>
            <div className={"experience-card-section"}>
                <div className={"card-panel"}>
                    {cardsJSX}
                </div>
            </div>
        </>
    )
}

interface IInfoCard {
    content: string,
}
const InfoCard = ({content}: IInfoCard) => {
    return (
        <>
            <div className={"info-card"}>
                <p>{content}</p>
            </div>
        </>
    )
}

const ExperienceAimsIbs = () => {

    const infoCardData = useMemo(() => {
        return [
            {content: "Emerging Business Concept Analysis is one of the interesting sessions for our students as it trains them on new emerging concepts in business. Experts will discuss the concepts giving multi-dimensional insights."},
            {content: "Industry experts will mentor the student on the various aspects of modern industries and will clear any doubts the student has about the same. This exercise is helping our students in opening up and expressing their difficulties and working on overcoming the same."},
            {content: "The Entrepreneurship Cell identifies and works with students interested in becoming entrepreneurs. Our E Cell mentors the students to develop the entrepreneurship spirit and supports them till they establish their own businesses."},
            {content: "Certification Courses & skills training are some of the most important activities at institute. In these, each student after the profile mapping process will be trained on company-specific skills. This enhances the chances of better employment."},
            {content: "Comprehensive News Analysis sessions are most appreciated and accepted which help students to get updated with business happenings and also enrich their analytical abilities of the ‘why’ and ‘how’ of current happenings. Sessions also enriches the comprehensive analytical skills of students."},
            {content: "Case Study Sessions and discussions are is one of the most important tools to initiate and develop the students thinking and problem-solving abilities. This is one of the important teaching tools at AIMS IBS Business School."},
            {content: "Corporate Lecture Series is a most appreciated teaching tool by students at our school. With a strong network with the corporate world, we have senior industry resource persons delivering domain-specific sessions every fortnight and advising students of what is expected by companies."},
            {content: "Company Visits are compulsory as students get more information about company operations and will be able to see the process very closely and link the same with concepts."},
            {content: "Individual & Team Projects develop the student’s abilities in working alone and in a team. Preparing the project on the work assigned is of great importance. The students are very appreciative of this and Projects are very much part of our curriculum."},
        ] as IInfoCard[];
    }, []);

    const infoCardJSX = useMemo(() => {
        let cards = infoCardData.map((f, i) => {
            return {
                children: <InfoCard {...f} key={i}/>,
            } as IBoxedJSXCard;
        });

        return {
            cards: cards,
        } as IBoxedJSXCards;
    }, [infoCardData])

    return (
        <>
            <Helmet>
                <title>Experience AIMS IBS - AIMS IBS</title>
                <meta name="description" content="Experience AIMS IBS"/>
            </Helmet>
            <PageLocation img={CommonExpereince} locations={["HOME", "EXPERIENCE AIMS IBS"]} title={"EXPERIENCE AIMS IBS"}/>
            <div className={"experience-aims-ibs"}>
                <Cards />
                <div className={"teaching-learning-experience"}>
                    <div className={"card-panel"}>
                        <h4 className={"heading"}>Teaching & Learning Experience</h4>
                        <BoxedJSXCards {...infoCardJSX}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceAimsIbs;