import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faBolt, faBookReader, faChartPie, faGlobeAmericas, faIndustry, faLayerGroup, faLightbulb, faProjectDiagram, faStar, faStickyNote, faStoreAlt, faTable, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonWhyAimsIbsTwo } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { FontAwesomeCards, IFontAwesomeCards, isInViewportThreshold } from "../../Utils/js/Utils";
import "./ValueAddedPrograms.scss";

const TrainingSection = () => {
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
            <div className={"training"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Industry Integrated Training & Placement Training</h5>
                    <div className={"content"}>
                        <p>Mock Interviews</p>
                        <p>Profile Building</p>
                        <p>Basic & Advanced Excel Training</p>
                        <p>Written Test & Aptitude Preparation Training</p>
                        <p>Group Discussion Training</p>
                        <p>Training on how to prepare Resume?</p>
                        <p>Training on SWOT Profiling in 3 Levels</p>
                        <p>Training on How to Face Job Interviews?</p>
                        <p>Job Description/Requirements Analysis</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const ValueAddedPrograms = () => {

    const cardsOneData = useMemo(() => {
        return {
            cards: [
                {
                    content: "Induction on Joining", contentTwo: "Roots to Fruits- 2-4 Weeks Induction Program",
                    svgName: faLightbulb, divClassName: ""
                },
                {
                    content: "Global Exposure", contentTwo: "Global Exposure Orientation in Singapore or Malaysia or Dubai",
                    svgName: faGlobeAmericas, divClassName: ""
                },
                {
                    content: "MS Excel Advanced", contentTwo: "Advance MS Excel Program",
                    svgName: faTable, divClassName: ""
                },
                {
                    content: "Specialization Orientation", contentTwo: "Industry Experts Sessions on How to choose Specialization? Assessment & Orientation by Faculty on Specializations",
                    svgName: faBolt, divClassName: ""
                },
                {
                    content: "Communication & Soft skills Training", contentTwo: "Level I & Level II-Campus to Corporate (C2C)",
                    svgName: faThumbsUp, divClassName: ""
                },
                {
                    content: "Comprehensive Business Analysis", contentTwo: "Weekly Session on News Paper & Business News Analysis",
                    svgName: faChartPie, divClassName: ""
                },
            ]
        } as IFontAwesomeCards;
    }, [])

    const cardsTwoData = useMemo(() => {
        return {
            cards: [
                {
                    content: "Live Projects", contentTwo: "Subject based, Industry specific and Specialization based Live Projects in Startups & reputed companies",
                    svgName: faProjectDiagram, divClassName: ""
                },
                {
                    content: "Case Studies", contentTwo: "More than 2 Top MNC’s and Indian Companies Case Studies for every subject",
                    svgName: faStickyNote, divClassName: ""
                },
                {
                    content: "Saturday Club Activities", contentTwo: "Mandatory club activities every Saturday as part of Student development programs",
                    svgName: faLayerGroup, divClassName: ""
                },
                {
                    content: "Industrial Visits", contentTwo: "Semester wise Industrial visit to top Companies ",
                    svgName: faIndustry, divClassName: ""
                },
                {
                    content: "Mentoring", contentTwo: "Mentoring by Industry & Academic Experts to enhance capabilities & confidence",
                    svgName: faBookReader, divClassName: ""
                },
                {
                    content: "Recognitions", contentTwo: "Best Student & Star Performer awards",
                    svgName: faStar, divClassName: ""
                },
                {
                    content: "SDP Sessions", contentTwo: "Various student development activities like Debate, GD, Presentations, Role Play etc. will be conducted post class hours",
                    svgName: faCalendarAlt, divClassName: ""
                },
                {
                    content: "Certified Workshops", contentTwo: "Certified Workshops on current trends in the industry every semester",
                    svgName: faStoreAlt, divClassName: ""
                },
            ]
        } as IFontAwesomeCards;
    }, [])

    return (
        <>
            <Helmet>
                <title>Value Added Programs - AIMS IBS</title>
                <meta name="description" content="Value Added Programs"/>
            </Helmet>
            <PageLocation img={CommonWhyAimsIbsTwo} locations={["HOME", "VALUE ADDED PROGRAMS & PEDAGOGY"]} title={"VALUE ADDED PROGRAMS & PEDAGOGY"}/>
            <div className={"value-added-programs"}>
                <FontAwesomeCards {...cardsOneData}/>
                <FontAwesomeCards {...cardsTwoData}/>

                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-4"}></div>
                        <div className={"mb-col-24 t-col-24 d-col-16"}>
                            <TrainingSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ValueAddedPrograms;