import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPrograms } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import "./PGDM.scss";
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
                        <p>To secure a wider recognition and promote the importance of efficient Materials Management in commercial and industrial undertakings</p>
                        <p>To safeguard and elevate the professional status of individuals engaged in the Materials Management faculty</p>
                        <p>To constantly impart advanced professional knowledge and thus improve the skill of the person engaged in the Materials Management function</p>
                        <p>To propagate and promote among the members’ strict adherence to IIMM Code of Conduct and Ethics</p>
                        <br/>
                        <p className={"admission"}><strong>Admission:</strong> Twice Jan/July every year through entrance test and viva-voce</p>
                        <a href={"https://aimsibs.nopaperforms.com/aims-ibs-application"} className={"button bg-deep-orange-600"}>APPLY NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
}

const PGDSCM = () => {

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
            <div className={"pgdscm"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Post Graduate Diploma in Supply Chain Management <br/>& Logistics (PGDSCM & L)</h5>
                    <div className={"content"}>
                        <p>This prestigious professional course aims at preparing students for the senior level management position. The syllabus has been structured at par with IFPSM standards giving due consideration to the Indian economic environment.</p>
                        <p>A Board of Studies consisting of leading personalities from the academic and professional field controls the courses at the national level. The faculty is drawn from experts in industry, educational and professional institutions in the country.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const PGDM = () => {
    return (
        <>
            <Helmet>
                <title>PGDM - AIMS IBS</title>
                <meta name="description" content="PGDM"/>
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "PGDM"]} title={"PGDM"}/>
            <div className={"pgdm"}>
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
                            <PGDSCM />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PGDM;