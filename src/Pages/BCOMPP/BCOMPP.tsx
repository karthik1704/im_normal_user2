//BCOMPP = B.Com.++

import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPrograms } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import "./BCOMPP.scss";
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

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 10)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                {value: "100%", duration: 0, delay: 0},
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

const BCOMPP = () => {
    return (
        <>
            <Helmet>
                <title>BCOM++ - AIMS IBS</title>
                <meta name="description" content="BCOM++"/>
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "B.Com++ (Bangalore University)"]} title={"B.Com++ (Bangalore University)"}/>
            <div className={"bcompp"}>
                <div>
                    <SectionOne />
                </div>
                <div>
                    {/* <SectionTwo /> */}
                </div>
                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <Pedagogy />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <Objective />
                            <Eligibility />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BCOMPP;