import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { MBABgOne } from "../../Assets/Assets";
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
                    <h4>MASTER OF BUSINESS ADMINISTRATION - MBA (Dual Specialisation)</h4>
                    <h6 className={"deep-orange-600"}>Affiliated to Bangalore University and Approved by AICTE</h6>

                    <p>Business scenario world over is passing through the era of VUCA-Volatility, Uncertainty, Complexity, and Ambiguity. Tomorrow’s leaders require different approaches both in thinking and action and abilities to adapt to continuous learning beyond class room settings. We have Two years full time regular course leading to MBA degree consisting four semesters that emphasizes on application of acquired knowledge through Case Studies, Field Works, Primary Research, Projects etc., that demands hands-on experiential learning. This programme offers a wide range of specialization subjects to choose from during second year in Third and Fourth semesters.</p>
                    <p>The Bangalore University MBA Program is a tightly scheduled and highly structured, student-centered program that aims at developing in the participants a thorough insight into both the conceptual basis as well as the practical skills involved in Management. The curriculum is based on feedback received from some of the best programs available and aims to enrich and sharpen the managerial skills of participants, to keep them abreast with the latest in the world of business and to help them appreciate and understand better the recent innovations in the discipline.</p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {MBABgOne.webp && <source type={"image/webp"} srcSet={MBABgOne.webp}/>}
                    {
                        MBABgOne.type === "jpg" && <img src={MBABgOne.jpg} alt={MBABgOne.alt} width={MBABgOne.w} height={MBABgOne.h} onLoad={handleResize} />
                    }
                    {
                        MBABgOne.type === "png" && <img src={MBABgOne.png} alt={MBABgOne.alt} width={MBABgOne.w} height={MBABgOne.h} onLoad={handleResize} />
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;