//BCOMPP = B.Com.++

import anime from "animejs";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPrograms } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import "./BCOMAcceleratorPlus.scss";
import SectionOne from "./SectionOne";

const Objective = () => {
    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if (!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                { value: "-100%", duration: 0, delay: 0 },
                { value: 0, duration: 1000, delay: 500 },
            ],
            opacity: [
                { value: 0, duration: 0, delay: 0 },
                { value: 1, duration: 1000, delay: 500 },
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);

    return (
        <>
            <div className={"objective"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Objective</h5>
                    <div className={"content"}>
                        <p>To provide a strong foundation level understanding of the functioning of business organizations, commercial transactions and of various specialized operations such as accounting, finance, and marketing by offering a comprehensive curriculum</p>
                        <p>To develop necessary professional knowledge and skills in Accounting, Finance, Marketing, Taxation, Export-Import management, etc. by adopting learner-centered pedagogical practices</p>
                        <p>Make every Commerce graduate eligible for professional studies such as CA, ICWA, ACS, MBA or other Masters Programs in Commerce / Management</p>
                        <p>To nurture the students in intellectual, personal, interpersonal and societal skills along with computer skills as part of Holistic Education</p>
                        <p>To enhance employability to be able to take up challenging job assignments in Accounting, Finance, Marketing or General Aptitude job openings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Pedagogy = () => {
    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if (!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateY: [
                { value: "-100%", duration: 0, delay: 0 },
                { value: 0, duration: 1000, delay: 500 },
            ],
            opacity: [
                { value: 0, duration: 0, delay: 0 },
                { value: 1, duration: 1000, delay: 500 },
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);

    return (
        <>
            <div className={"pedagogy"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Pedagogy</h5>
                    <p>Course offers regular classroom lectures from best faculty along with most innovative pedagogy by following</p>
                    <div className={"content"}>
                        <p>Case Studies</p>
                        <p>Role Plays</p>
                        <p>Live Projects</p>
                        <p>Seminars and Presentations</p>
                        <p>Simulation Exercises</p>
                        <p>Current Affairs Sessions relevant to the topic</p>
                        <p>Industrial visits</p>
                        <p>Company based projects</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Eligibility = () => {

    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if (!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 10)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                { value: "100%", duration: 0, delay: 0 },
                { value: 0, duration: 1000, delay: 500 },
            ],
            opacity: [
                { value: 0, duration: 0, delay: 0 },
                { value: 1, duration: 1000, delay: 500 },
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);

    return (
        <>
            <div className={"eligibility"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>ELIGIBILITY</h5>
                    <div className={"content"}>
                        <p>PUC or equivalent exam (from any stream) passed with good score.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

interface IProps {
    heading: string;
    desc?: string;
    children?: React.ReactNode;
    translateXStartValue: string;
}

const CommonBox: React.FC<IProps> = ({ heading, desc, children, translateXStartValue }) => {

    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if (!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                { value: translateXStartValue, duration: 0, delay: 0 },
                { value: 0, duration: 1000, delay: 500 },
            ],
            opacity: [
                { value: 0, duration: 0, delay: 0 },
                { value: 1, duration: 1000, delay: 500 },
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef, translateXStartValue]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);

    return (
        <>
            <div className={"pedagogy"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>{heading}</h5>
                    {!!desc && <p>{desc}</p>}
                    <div className={"content"}>
                        {!!children && children}
                    </div>
                </div>
            </div>
        </>
    )
}

const SneakPeak = () => {

    return (
        <CommonBox
            heading="Sneak Peak"
            translateXStartValue="-100%"
        >
            <p>Career Workshops on ACCA, MS Office, MS Excel, Tally, Digital Marketing, Stock Market, IBPS(Banking Exam), CA, CS, Business Analytics, ICWA. </p>
            <p>Fresher's Day</p>
            <p>'Parakh' - 2 week orientation program</p>
            <p>ALP (Adventure Learning Program)</p>
            <p>International Tour</p>
            <p>Internship in Top Corporates </p>
            <p>Industrial visits</p>
            <p>Outstation Experiential Learning Trip</p>
            <p>Placement Interviews</p>
            <p>Training on Aptitude Skills</p>
            <p>Placement Training</p>
            <p>Farewell & Graduation Event</p>
            <p>Sports Day</p>

        </CommonBox>
    )
}

const CareerOptions = () => {
    return (
        <CommonBox
            heading="Career Options"
            translateXStartValue="100%"
        >
            <p>CA</p>
            <p>CS</p>
            <p>ICWA</p>
            <p>ACCA</p>
            <p>IBPS & Banking Career</p>
            <p>Business Analytics</p>
            <p>Data Science</p>
            <p>Digital Marketing</p>
            <p>Stock Market</p>
        </CommonBox>
    )
}


const RolesOffered = () => {
    return (
        <CommonBox
            heading="Roles Offered"
            translateXStartValue="100%"
        >
            <p>Accountant</p>
            <p>Business Adviser</p>
            <p>Business Analyst</p>
            <p>Compliance/Governance Officer</p>
            <p>Credit Control Manager</p>
            <p>Equity Research Analyst</p>
            <p>Financial Analyst</p>
            <p>Forensic Accountant</p>
            <p>Funds Manager</p>
            <p>Management Accountant</p>
            <p>Risk Manager</p>
            <p>Tax Accountant</p>
            <p>Tax Analyst</p>
            <p>Tax Consultant</p>
            <p>Insolency Practitioner</p>
            <p>Internal Auditor</p>
        </CommonBox>
    )
}

const SkillEnhancementPrograms = () => {
    return (
        <CommonBox
            heading="Skill Enhancement Programs"
            translateXStartValue="-100%"
        >
            <p>Workshop on Healthy Living - Art of Living</p>
            <p>Workshop on Professional Grooming</p>
            <p>Guest Lectures</p>
            <p>Panel Discussion by Industry Experts</p>
            <p>Workshop on Resume Building & Corporate Etiquettes</p>
            <p>'Energizer' - One Day Exhibition on Subject Concepts by Students</p>
            <p>Participation in Bangalore Literary Fest</p>
            <p>Presentation Week - Emerging Trends in Business</p>
            <p>Sector Analysis Week</p>
            <p>Workshop on Mock Interviews & How to Face Job Interviews</p>
            <p>Entrepreneurship Week</p>
            <p>Interships & Live Projects</p>
            <p>Case Study Analysis</p>
        </CommonBox>
    )
}



const SemesterOne = () => {

    return (
        <CommonBox heading="Semester 1 " translateXStartValue="-100%">
            <p>Language - I</p>
            <p>Language - II</p>
            <p>Financial Accountancy</p>
            <p>Business Management & Startup</p>
            <p>Principles of Marketing</p>
            <p>Digital Spreadsheet for Business</p>
            <p>Financial Literacy</p>
            <p>Physical Education</p>
            <p>Health & Wellness</p>
        </CommonBox>
    )
}

const SemesterTwo = () => {

    return (
        <CommonBox heading="Semester 2 " translateXStartValue="100%">
            <p>Language - I</p>
            <p>Language - II</p>
            <p>Advanced Financial Accounting</p>
            <p>Financial Market Management</p>
            <p>Banking Law & Operations</p>
            <p>Quantitative Analysis for Business Decisions - I</p>
        </CommonBox>
    )
}

const SemesterThree = () => {

    return (
        <CommonBox heading="Semester 3 " translateXStartValue="-100%">
            <p>Language - I</p>
            <p>Language - II</p>
            <p>Financial Management</p>
            <p>Corporate Accounting</p>
            <p>Elements of Costing</p>
            <p>Indian Financial System</p>
            <p>Foundation Course</p>
            <p>CC & EC</p>
        </CommonBox>
    )
}

const SemesterFour = () => {

    return (
        <CommonBox heading="Semester 4 " translateXStartValue="100%">
            <p>Language - I</p>
            <p>Language - II</p>
            <p>Advanced Corporate Accounting</p>
            <p>Costing Methods</p>
            <p>E-business & Computerized Accounting </p>
            <p>Business Regulations</p>
            <p>Foundation course</p>
            <p>CC & EC</p>
        </CommonBox>
    )
}

const SemesterFive = () => {

    return (
        <CommonBox heading="Semester 5 " translateXStartValue="-100%">
            <p>Entrepreneurship Development</p>
            <p>International Business</p>
            <p>Income Tax - I</p>
            <p>Cost Management</p>
            <p>Advanced Accounting</p>
            <p>Business Taxation - I</p>
        </CommonBox>
    )
}

const SemesterSix = () => {

    return (
        <CommonBox heading="Semester 6 " translateXStartValue="100%">
            <p>Business Regulations</p>
            <p>Principles & Practice of Auditing</p>
            <p>Income Tax - II</p>
            <p>Management Accounting</p>
            <p>Business Taxation - II</p>
            <p>Accounting for Business Decisions & IFRS</p>
        </CommonBox>
    )
}

const SemesterSeven = () => {

    return (
        <CommonBox heading="Semester 7 " translateXStartValue="-100%">
            <p>International Business</p>
            <p>Business Analysis</p>
            <p>Financial Derivatives</p>
            <p>Group 1/2/3/4</p>
            <p>ERP Applications</p>
            <p>Research Methodology</p>
        </CommonBox>
    )
}

const SemesterEight = () => {

    return (
        <CommonBox heading="Semester 8 " translateXStartValue="100%">
            <p>Financial Reporting</p>
            <p>Strategic Financial Planning</p>
            <p>Data Analysis & Decision Sciences</p>
            <p>Group 1/2/3/4</p>
            <p>Managing Digital Platforms</p>
            <p>Research Projects/Interships with Viva-Voce</p>
        </CommonBox>
    )
}


const BCOMAcceleratorPlus = () => {
    return (
        <>
            <Helmet>
                <title>BCOM Accelerator+ - AIMS IBS</title>
                <meta name="description" content="BCOM++" />
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "B. COM Accelerator+"]} title={"B. COM Accelerator+"} />
            <div className={"bcompp"}>
                <div>
                    <SectionOne />
                </div>
                <div>
                    {/* <SectionTwo /> */}
                </div>
                {/* <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <Pedagogy />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <Objective />
                            <Eligibility />
                        </div>
                    </div>
                </div> */}
                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <SneakPeak />
                            <SkillEnhancementPrograms />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <CareerOptions />
                            <RolesOffered />
                            <Eligibility />
                        </div>
                    </div>
                </div>

                <div className={"section-two"}>
                    <div className="section-title">
                        <h4 className="white">B.COM Course Curriculum</h4>
                        <p className="white">*Subject to change as per Banglore University</p>
                    </div>

                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <SemesterOne />
                            <SemesterThree />
                            <SemesterFive />
                            <SemesterSeven />

                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <SemesterTwo />
                            <SemesterFour />
                            <SemesterSix />
                            <SemesterEight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BCOMAcceleratorPlus;