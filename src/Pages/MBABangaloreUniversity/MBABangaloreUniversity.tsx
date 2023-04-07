import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPrograms } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import "./MBABangaloreUniversity.scss";
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
                        <p>To Prepare leaders and Management practitioners through the innovative learning process</p>
                        <p>Focus on Result Oriented Process and Value-Based Culture Building</p>
                        <p>Building Intellectual Capital through Management Development and Faculty Development Programs</p>
                        <p>Provide Management talent that could serve multilevel with multitasking abilities</p>
                        <p>Empower to become entrepreneurs in different verticals matching to their passion and drive</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const EffectiveAreas = () => {
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
            <div className={"effective-areas"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Elective Areas - Specializations</h5>
                    <div className={"content"}>
                        <p>Marketing</p>
                        <p>Finance</p>
                        <p>Human Resource Management</p>
                        <p>Health Care Management</p>
                        <p>Banking & Finance</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const EligibilityAndWrittenTest = () => {

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
            <div className={"eligibility-and-written-test"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>ELIGIBILITY</h5>
                    <div className={"content"}>
                        <p>Graduates having scored 50% (3 years program) with any discipline are eligible to apply. Students awaiting final year/semester results can also apply.(However, such students will be given provisional admission subject to the submission of their final marks sheet).</p>
                    </div>
                    <h5 className={"heading"}>WRITTEN TEST</h5>
                    <div className={"content"}>
                        <p>Candidates who have appeared and passed any of the entrance tests of the national or state level, for example, CAT, MAT, XAT, CMAT, PGCET,KMAT etc are eligible to apply</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const MBABangaloreUniversity = () => {
    return (
        <>
            <Helmet>
                <title>MBA Bangalore University - AIMS IBS</title>
                <meta name="description" content="MBA Bangalore University"/>
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "MBA (Bangalore University)"]} title={"MBA (Bangalore University)"}/>
            <div className={"mba-bangalore-university"}>
                <div>
                    <SectionOne />
                </div>
                <div>
                    {/* <SectionTwo /> */}
                </div>
                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <Objective />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <EffectiveAreas />
                            <EligibilityAndWrittenTest />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MBABangaloreUniversity;