import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { OurBSchoolOne } from "../../Assets/Assets";
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
        
        imgDivRef.current.style.height = contentDivRef.current.offsetHeight + "px";
        imgDivRef.current.style.top = -(contentDivRef.current.offsetHeight * 50 / 100) + "px";
        imgDivRef.current.style.marginBottom = -(contentDivRef.current.offsetHeight * 50 / 100) + "px";
        
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
                    <h4>Ranked Among <span className={"deep-orange-600"}>Top 100</span> B School</h4>
                    <h5 className={"deep-orange-600"}>Situated in Bangalore</h5>

                    <p>AIMS IBS being top Ranked B School is an ideal destination for students who are aspiring for a dynamic multi-disciplinary career approach. The institution has come a long way since its inception and has strong milestones in last two decades plus with years of experienced existence. Being a well- known name in the education sector, it has established itself in the top MBA colleges in Bangalore and Pan India.</p>
                    <p>Our experience so far has been enriching with improvement over the previous years with respect to learning and industry exposure and a confidence that the upcoming batches will experience gradual betterment and benefits. The institution has been an intellectual destination for inspired students who are ready to put constant effort and create a niche in the making of their Dream Tomorrow.</p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {OurBSchoolOne.webp && <source type={"image/webp"} srcSet={OurBSchoolOne.webp}/>}
                    {
                        OurBSchoolOne.type === "jpg" && <img src={OurBSchoolOne.jpg} alt={OurBSchoolOne.alt} width={OurBSchoolOne.w} height={OurBSchoolOne.h} onLoad={handleResize} />
                    }
                    {
                        OurBSchoolOne.type === "png" && <img src={OurBSchoolOne.png} alt={OurBSchoolOne.alt} width={OurBSchoolOne.w} height={OurBSchoolOne.h} onLoad={handleResize} />
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;