import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPrograms } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import "./PGPM.scss";
import SectionOne from "./SectionOne";

const TourismTravel = () => {
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
            <div className={"tourism-travel"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>PGPM in TOURISM & TRAVEL MANAGEMENT</h5>
                    <div className={"content"}>
                        <p>SAP – Sales & Distribution Module</p>
                        <p>SAP – HR Module</p>
                        <p>IATA- Certification Course in Tourism & Travel Management</p>
                        <p>Tourism & Travel Industry Analysis Live Project</p>
                        <p>3 Months Compulsory Internship in Top Tourism/Travel/Hospitality Companies</p>
                        <p>Industrial Visit to Tourism & Travel Companies</p>
                        <p>Top MNC's & Indian Tourism/Travel/Hospitality Companies Case Studies</p>
                        <p>Final Placements with leading Tourism/Travel/Hospitality Companies</p>
                        <p>Interaction with Professionals from same Industry</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const InternationalBusiness = () => {
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
            <div className={"international-business"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>PGPM in INTERNATIONAL BUSINESS</h5>
                    <div className={"content"}>
                        <p>SAP – Sales & Distribution Module</p>
                        <p>SAP – Finance Module</p>
                        <p>Certification course in Export & Import Documentation</p>
                        <p>Top MNC's & Reputed Companies Analysis Live Project</p>
                        <p>3 Months Compulsory Internship in Top MNC’s</p>
                        <p>Industrial Visit to Reputed companies & MNC’s</p>
                        <p>Top Companies & MNC’s Case Studies</p>
                        <p>Final Placements with Reputed companies</p>
                        <p>Interaction with Professionals from same Industry</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const IndustryIntegratedProjects = () => {

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
            <div className={"industry-integrated-projects"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Industry Integrated Projects</h5>
                    <div className={"content"}>
                        <p><strong>Project 1: </strong>Supply Chain Management & Logistics Industry Analysis Project</p>
                        <p><strong>Project 2: </strong>Industry Aligned 1 Month Live Project in Supply Chain Management & Logistics startups (Case Study based)</p>
                        <p><strong>Project 3: </strong>Independent Supply Chain Management & Logistics Industry Specific & Problem Based Project</p>
                        <p><strong>Final Project 4: </strong>3 Months Compulsory Internship in Top Supply Chain Management & Logistics Companies</p>
                        <p className={"no-border"}>Industrial Visit to Supply Chain Management & Logistics companies/department</p>
                        <p className={"no-border"}>Top MNC’s and Indian Supply Chain Management & Logistics Companies Case Studies</p>
                        <p className={"no-border"}>Mentoring & Guest Lecture Session by Supply Chain Management & Logistics Industry experts</p>
                        <p className={"no-border"}>Final Placements with leading Supply Chain Management & Logistics Companies</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const PGPM = () => {
    return (
        <>
            <Helmet>
                <title>PGPM - AIMS IBS</title>
                <meta name="description" content="PGPM"/>
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "PGPM"]} title={"PGPM"}/>
            <div className={"pgpm"}>
                <div>
                    <SectionOne />
                </div>
                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <IndustryIntegratedProjects />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <InternationalBusiness />
                            <TourismTravel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PGPM;