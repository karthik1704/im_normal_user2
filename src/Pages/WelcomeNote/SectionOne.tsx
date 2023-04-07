import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { WelcomeNoteOne } from "../../Assets/Assets";
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
        imgDivRef.current.style.top = -(contentDivRef.current.offsetHeight * 90 / 100) + "px";
        imgDivRef.current.style.marginBottom = -(contentDivRef.current.offsetHeight * 90 / 100) + "px";
        
    }, [imgDivRef, contentDivRef, sectionRef]);

    const animation = useCallback(() => {
        if (!imgDivRef.current || !contentDivRef.current) return;

        anime({
            targets: imgDivRef.current,
            translateX: [
                {value: "-60%", duration: 0, delay: 100},
                {value: 0, duration: 1000, delay: 100},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

        anime({
            targets: contentDivRef.current,
            translateX: [
                {value: "60%", duration: 0, delay: 100},
                {value: 0, duration: 1000, delay: 100},
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
                    <h4><span className={"deep-orange-600"}>Dear Aspirants,</span></h4>
                    <h5 className={""}>Welcome!</h5>

                    <p>AIMS IBS has come a long way since its inception and has crossed many milestones in the last 2 decades with a legacy to count on. Our experience so far has been enriching year after year with respect to learning and industry exposure and we are confident that the incoming batch each year is not going to be an exception. Over the years, the institution has been witnessing growth in terms of its campuses, activities, placements, programs or number of students and also has created a landmark in management education. It is a pleasure to express that AIMS IBS stands strong today because of several thousands of Alumni working in most of the top-notch MNCs and equally reputed companies in India & abroad. It is encouraging that the number of applications from quality aspirants has increased substantially.</p>
                    <p>This indicates that the student community, industry, and academic ecosystem have confidence and faith in the ability of AIMS IBS to deliver a life-changing B-school experience for the aspiring student community. Management education is undergoing soul-searching phenomenon and business schools across the globe are working hard on being industry-relevant and competitive. </p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {WelcomeNoteOne.webp && <source type={"image/webp"} srcSet={WelcomeNoteOne.webp}/>}
                    {
                        WelcomeNoteOne.type === "jpg" && <img src={WelcomeNoteOne.jpg} alt={WelcomeNoteOne.alt} width={WelcomeNoteOne.w} height={WelcomeNoteOne.h} onLoad={handleResize} />
                    }
                    {
                        WelcomeNoteOne.type === "png" && <img src={WelcomeNoteOne.png} alt={WelcomeNoteOne.alt} width={WelcomeNoteOne.w} height={WelcomeNoteOne.h} onLoad={handleResize} />
                    }
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;