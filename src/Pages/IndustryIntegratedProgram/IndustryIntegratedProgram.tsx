import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPrograms } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import "./IndustryIntegratedProgram.scss";
import SectionOne from "./SectionOne";

const Objective = () => {
    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                {value: "-100%", duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 500},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 0},
                {value: 1, duration: 1000, delay: 500},
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
                    <p>This course aims at realizing the following objectives:</p>
                    <div className={"content"}>
                        <p>To bridge the gap between university curriculum and latest industry requirement as per Industry 4.0/Education 4.0.</p>
                        <p>To inculcate in the students requirement that are beyond knowledge given in the curriculum in areas such as interpersonal skills, creativity, lateral thinking, communication, people management are essential competent for progress in any sphere.</p>
                        <p>To Provide the competitive edge to the students and make them professional to compete in the international market</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const OnlyIndustryIntegratedProgramSection = () => {
    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateY: [
                {value: "-100%", duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 500},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 0},
                {value: 1, duration: 1000, delay: 500},
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
            <div className={"only-industry-integrated-program-section"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>India’s 1st & Only Industry Integrated Program</h5>
                    <p>The MBA along with value-added Industry Integrated training is planned in a unique way, which includes the prescribed curriculum of the University and additional value-add modules, which are designed at AIMS IBS and based on industry needs. This makes the subjects of study comprehensive, current and industry-relevant.</p>
                    <p>Industry Integrated program is</p>
                    <div className={"content"}>
                        <p>Right Blend Of Profile Mapping</p>
                        <p>Skill Gap Analysis</p>
                        <p>Expectations Management</p>
                        <p>2 Industry Projects </p>
                        <p>Course Based Live Projects Every Semester</p>
                        <p>3 Months Internship</p>
                        <p>Specialized Mentoring And Training By Industry Mentors</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const CourseStructure = () => {

    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                {value: "100%", duration: 0, delay: 500},
                {value: 0, duration: 1000, delay: 500},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 500},
                {value: 1, duration: 1000, delay: 500},
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
            <div className={"course-structure"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Course Structure</h5>
                    <div className={"content"}>
                        <p>The AIMS IBS industry integrated program juxtaposes the courses of the MBA program with additional courses that are either prescribed by the industry or motivated by our experience of placing students. The additional course not only gives a well-rounded knowledge but makes them relevant and ready for the industry. The curriculum incorporates a few foundation modules designed to equip the students with professional skills of communication, decision-making thinking and industry experience</p>
                        <p>AIMS IBS addressed the growing need for continuous upgrading and enhancing the quality and relevance of the curriculum and methodology in its course to match the ever-changing needs of the industry, commerce, and service.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const IndustryIntegratedProgram = () => {
    return (
        <>
            <Helmet>
                <title>Industry Integrated Program - AIMS IBS</title>
                <meta name="description" content="Industry Integrated Program"/>
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "INDUSTRY INTEGRATED PROGRAM"]} title={"INDUSTRY INTEGRATED PROGRAM"}/>
            <div className={"industry-integrated-program"}>
                <div>
                    <SectionOne />
                </div>
                <div>
                    {/* <SectionTwo /> */}
                </div>
                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <OnlyIndustryIntegratedProgramSection />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <Objective />
                            <CourseStructure />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustryIntegratedProgram;