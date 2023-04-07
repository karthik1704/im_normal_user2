import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { IndustryRelevantCertifications1 } from "../../Assets/Assets";
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
                    <h4>Education 4.0</h4>
                    <h6 className={"deep-orange-600"}>Match Industry 4.0 requirements</h6>
                    <h6 className={""}>Education 4.0 is the need of the hour which in turn demands for aligning learning outcomes to Industry 4.0 requirements</h6>

                    <p>As part of fulfilling Education 4.0 requirements AIMS IBS is offering various courses as additional certificate courses so that students are equipped with RIGHTSKILLs. The additional certificate courses offered are highly relevant to Industry and helps students to match industry expected skills.</p>
                    <p>The certificate courses offered are recommended by panel of industry experts and academicians who will mentor our students so that students are aware about value addition that they get from these courses.</p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {IndustryRelevantCertifications1.webp && <source type={"image/webp"} srcSet={IndustryRelevantCertifications1.webp}/>}
                    {
                        IndustryRelevantCertifications1.type === "jpg" && <img src={IndustryRelevantCertifications1.jpg} alt={IndustryRelevantCertifications1.alt} width={IndustryRelevantCertifications1.w} height={IndustryRelevantCertifications1.h} onLoad={handleResize} />
                    }
                    {
                        IndustryRelevantCertifications1.type === "png" && <img src={IndustryRelevantCertifications1.png} alt={IndustryRelevantCertifications1.alt} width={IndustryRelevantCertifications1.w} height={IndustryRelevantCertifications1.h} onLoad={handleResize} />
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;