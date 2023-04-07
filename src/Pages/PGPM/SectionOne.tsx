import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { PGPMOne } from "../../Assets/Assets";
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
                    <h4>PGPM in</h4>
                    <h6 className={"deep-orange-600"}>SUPPLY CHAIN MANAGEMENT & LOGISTICS</h6>
                    <div className={"para-div"}>
                        <p>SAP – SCM Module/Materials Management</p>
                        <p>SAP – Sales & Distribution Module</p>
                        <p>Business Analytics Training</p>
                        <p>Advance Excel Training</p>
                        <p>Diploma in International Business</p>
                        <p>Entrepreneurship Training by National Entrepreneurship Network</p>
                    </div>
                    <h6 className={"deep-orange-600"}>INDUSTRY SPECIFIC CERTIFIED TRAINING</h6>
                    <div className={"para-div"}>
                        <p>Course in Supply Chain by Safe Express</p>
                        <p>Course in Logistics by CII (Confederation of Indian Industry)</p>
                        <p>Training on Sales & Negotiation Skills</p>
                    </div>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {PGPMOne.webp && <source type={"image/webp"} srcSet={PGPMOne.webp}/>}
                    {
                        PGPMOne.type === "jpg" && <img src={PGPMOne.jpg} alt={PGPMOne.alt} width={PGPMOne.w} height={PGPMOne.h} onLoad={handleResize} />
                    }
                    {
                        PGPMOne.type === "png" && <img src={PGPMOne.png} alt={PGPMOne.alt} width={PGPMOne.w} height={PGPMOne.h} onLoad={handleResize} />
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;