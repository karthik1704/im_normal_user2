import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { IndustryIntegratedProgramOne } from "../../Assets/Assets";
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
                    <h4>Industry Integrated Program</h4>

                    <p>AIMS IBS enables its students to graduate with an MBA, in the two years of study. It is the only one of its kind in India. The program provides a two-fold advantage to the students in acquiring a recognized degree from a University and industry- Integrated training required by the industry. This is done with the objective of providing a university-based learning program and an effort to reach the curriculum expectations of the University. This Management Program has gained ready acceptance by the industry, which is looking for contemporary learning and ready-to-perform managers with multiple skill sets. Limiting the number of student Intake, management achieves the expectation of Individual focus and grooming and expects better than the Best results from the students in terms of Marks and Placements.</p>
                    <p>AIMS IBS offers 2 Year MBA along with its flagship Industry Integrated program. The program is designed and structured to meet the industry requirements considering the contemporary needs of the job market. </p>
                    <p>The industry-integrated concept being unique, focuses on Profile mapping, skill gap analysis, industry analysis and training the students the way industry expects. Global Exposure opportunities are part of the program which will give options to students for International Exchange and Internship program.</p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {IndustryIntegratedProgramOne.webp && <source type={"image/webp"} srcSet={IndustryIntegratedProgramOne.webp}/>}
                    {
                        IndustryIntegratedProgramOne.type === "jpg" && <img src={IndustryIntegratedProgramOne.jpg} alt={IndustryIntegratedProgramOne.alt} width={IndustryIntegratedProgramOne.w} height={IndustryIntegratedProgramOne.h} onLoad={handleResize} />
                    }
                    {
                        IndustryIntegratedProgramOne.type === "png" && <img src={IndustryIntegratedProgramOne.png} alt={IndustryIntegratedProgramOne.alt} width={IndustryIntegratedProgramOne.w} height={IndustryIntegratedProgramOne.h} onLoad={handleResize} />
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;