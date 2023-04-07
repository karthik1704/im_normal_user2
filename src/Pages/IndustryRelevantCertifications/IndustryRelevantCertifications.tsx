import SectionOne from "./SectionOne";
import "./IndustryRelevantCertifications.scss";
import { PageLocation } from "../../Common/Components/Components";
import { useCallback, useEffect, useRef, useState } from "react";
import { isInViewportThreshold } from "../../Utils/js/Utils";
import anime from "animejs";
import { CommonWhyAimsIbs } from "../../Assets/Assets";
import { Helmet } from "react-helmet-async";

const AdditionalCoursesList = () => {
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
            <div className={"additional-courses-list"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Based on the industry expectations and job opportunities, AIMS IBS offers following course to students</h5>
                    <div className={"content"}>
                        <p>SAP/ Enterprise Resource Planning</p>
                        <p>Digital Marketing</p>
                        <p>Business Analytics</p>
                        <p>Advanced Excel</p>
                        <p>Investment Banking</p>
                        <p>Project Management</p>
                        <p>Capital Market</p>
                        <p>Six Sigma</p>
                        <p>Advanced Logistics & Supply Chain Management</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const AdditionalCourses = () => {
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
            <div className={"additional-courses"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>The additional certificate courses offered will bring following advantages</h5>
                    <div className={"content"}>
                        <p>Students will have extra mileage in terms of employability.</p>
                        <p>Enhances employability skills so that student will get multiple quality opportunities.</p>
                        <p>Companies are happy to recruit as they see a greater advantage in hiring trained manpower.</p>
                        <p>Students will have many opportunities when it comes to choosing the right sector and right career.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const IndustryRelevantCertifications = () => {
    return (
        <>
            <Helmet>
                <title>Industry Relevant Certifications - AIMS IBS</title>
                <meta name="description" content="Industry Relevant Certifications"/>
            </Helmet>
            <PageLocation img={CommonWhyAimsIbs} locations={["HOME", "INDUSTRY RELEVANT CERTIFICATIONS"]} title={"INDUSTRY RELEVANT CERTIFICATIONS"}/>
            <div className={"industry-relevant-certifications"}>
                <div>
                    <SectionOne />
                </div>
                <div className={"section-two"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <AdditionalCourses />
                        </div>
                        <div className={"mb-col-24 t-col-24 d-col-12"}>
                            <AdditionalCoursesList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustryRelevantCertifications;