import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { PGDMOne } from "../../Assets/Assets";
import { isInViewportThreshold } from "../../Utils/js/Utils";

const SectionOne = () => {

    const imgDivRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentDivRef = useRef<HTMLDivElement>(null);

    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {
        let mq = window.matchMedia("(max-width: 767px)");
        if (mq.matches) return;

        if(!sectionRef.current) return;
        if (isInViewportThreshold(sectionRef.current, 50)) {
            setAnimate(true);
        }
    }, []);

    const handleResize = useCallback(() => {
        if (!imgDivRef.current || !contentDivRef.current || !sectionRef.current) return;
        
        imgDivRef.current.style.height = contentDivRef.current.offsetHeight * 75 / 100 + "px";
        imgDivRef.current.style.top = -(contentDivRef.current.offsetHeight * 75 / 100) + "px";
        imgDivRef.current.style.marginBottom = -(contentDivRef.current.offsetHeight * 75 / 100) + "px";
        
    }, [imgDivRef, contentDivRef, sectionRef]);

    const animation = useCallback(() => {
        if (!imgDivRef.current || !contentDivRef.current) return;

        anime({
            targets: imgDivRef.current,
            translateX: [
                {value: "-60%", duration: 0, delay: 200},
                {value: 0, duration: 1000, delay: 200},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

        anime({
            targets: contentDivRef.current,
            translateX: [
                {value: "60%", duration: 0, delay: 200},
                {value: 0, duration: 1000, delay: 200},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });
    }, [imgDivRef, contentDivRef]);

    useEffect(() => {
        handleResize();
        handleScroll();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
        };
    }, [handleResize, handleScroll, animation])

    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation])

    return (
        <div className={"section-one"} ref={sectionRef}>
            <div className={"content"} ref={contentDivRef}>
                <div className={"card-panel"}>
                    <h4>PG DIPLOMA IN SCM & LOGISTICS FROM IIMM</h4>
                    <h6 className={"deep-orange-600"}>About Indian Institute of Materials Management (IIMM)</h6>

                    <p>Indian Institute of Materials Management (IIMM)” with its Headquarters at Navi Mumbai, is the National Apex body representing a wide spectrum of professionals engaged in various facets of Material Management, responsible for planning, sourcing, Logistics & Supply Chain Management.</p>
                    <p>Through its wide network of 52 branches and 19 chapters having around 9500 members drawn form public and private sectors,( IIMM is dedicated to the promotion of the profession of Materials Management) and with its multifarious activities, including EDP, seminars, workshops, in-house training programs and consultancy assignment & Advance Materials Management Programs & Research Programs, To have more effective global interaction , Institute is a chartered member of International Federation of Purchasing and Supply Management (IFPSM), Atlanta (USA) Incorporated in Switzerland, which has its members in over 44 countries. In furtherance to its objectives, the Institute is conducting a Graduate Diploma Course in Materials Management (GDMM) recognized by Govt. of India for appointment of superior posts and services under the Central Government and also accredited by IFPSM. It also conducts a three-year Post Graduate Diploma Course in Materials Management (PGDMM) by correspondence which is recognized by AICTE. Diploma in Logistics Management a high profile one year distance education program has been launched from July 2000. The Institute has its Centre for Advanced Management Studies at Mumbai and Centre for Research in Materials Management (CRIMM) at Kolkata, which are engaged to promote research in Materials Management & also collaborate with industry for furthering the professional advancement of Materials Management & its applications.</p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {PGDMOne.webp && <source type={"image/webp"} srcSet={PGDMOne.webp}/>}
                    {
                        PGDMOne.type === "jpg" && <img src={PGDMOne.jpg} alt={PGDMOne.alt} width={PGDMOne.w} height={PGDMOne.h} onLoad={handleResize} />
                    }
                    {
                        PGDMOne.type === "png" && <img src={PGDMOne.png} alt={PGDMOne.alt} width={PGDMOne.w} height={PGDMOne.h} onLoad={handleResize} />
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;