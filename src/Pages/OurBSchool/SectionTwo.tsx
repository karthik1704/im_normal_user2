import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { OurBSchoolOne } from "../../Assets/Assets";
import { isInViewportThreshold } from "../../Utils/js/Utils";

const SectionTwo = () => {

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

    const animation = useCallback(() => {
        if (!imgDivRef.current || !contentDivRef.current) return;

        anime({
            targets: imgDivRef.current,
            translateX: [
                {value: "60%", duration: 0, delay: 200},
                {value: 0, duration: 1000, delay: 200},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

        anime({
            targets: contentDivRef.current,
            translateX: [
                {value: "-60%", duration: 0, delay: 200},
                {value: 0, duration: 1000, delay: 200},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });
    }, [imgDivRef, contentDivRef]);

    const handleResize = useCallback(() => {
        if (!imgDivRef.current || !contentDivRef.current || !sectionRef.current) return;

        let mq = window.matchMedia("(max-width: 767px)");

        if (mq.matches) {
            contentDivRef.current.style.top = "unset";
            contentDivRef.current.style.marginBottom = "unset";
            return;
        }

        imgDivRef.current.style.height = contentDivRef.current.offsetHeight + "px";
        contentDivRef.current.style.top = -(contentDivRef.current.offsetHeight * 70 / 100) + "px";
        contentDivRef.current.style.marginBottom = -(contentDivRef.current.offsetHeight * 70 / 100) + "px";
        
    }, [imgDivRef, contentDivRef, sectionRef]);

    useEffect(() => {
        handleResize();
        handleScroll();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("touchmove", handleScroll)
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleResize, handleScroll])

    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation])

    return (
        <div className={"section-two"} ref={sectionRef}>
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
            <div className={"content"} ref={contentDivRef}>
                <div className={"card-panel"}>
                    <h4>Ranked Among</h4>
                    <h5 className={"deep-orange-600"}>Top MBA colleges with Best Placements acknowledgement</h5>

                    <p>AIMS IBS being the best Business schools in Bangalore is situated in a serene and peaceful environment in the Silicon City in one of the elite areas and hub of companies, hangout places and education institution. Creating a location advantage to the students of AIMS IBS, this is the 1st and only institute to offer Industry Integrated MBA program to realize students of their true potentials and get ready for the Real World out there. To shape the Leaders of Tomorrow, the program is truly designed to deliver the way industry expects.</p>
                    <p>The Institution has well defined infrastructure and process in place leading to better environment and learning’s for the future generation. AIMS IBS also offers global exchange & internship opportunities for students in more than 7 countries.</p>
                    <p>The friendly faculty and staff combined with the state of the art infrastructure make up for a pleasant ambience and a splendid environment for learning. The spacious and well lit porches and lounge provide space where students get together for the after class interaction and leisure. Bangalore – an epicentre of corporate activity with presence of top global corporate entities and industries is also famous for its metropolitan life – giving AIMS IBS students a homogeneous mix of learning and leisure. A host of interactive and colourful cultural events which is a regular feature at AIMS IBS makes students feel that it is a home away from home.</p>
                </div>
            </div>

        </div>
    )
}

export default SectionTwo;