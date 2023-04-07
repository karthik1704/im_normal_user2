import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { BCOMPPOne } from "../../Assets/Assets";
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
                    <h4>BACHELOR OF COMMERCE - B.COM</h4>
                    <h6 className={"deep-orange-600"}>From Bangalore University</h6>
                    <h6 className={"sub-head"}>Accounting & Taxation, Finance, Information & Technology and Banking & Insurance</h6>

                    <p>Institute offers B.Com from Bangalore University. The Bachelor of Commerce degree is designed to provide the student with a wide range of managerial skills along with building competence in a the area of business studies. The three years program is divided into six semesters. It includes 35 core papers besides English and language papers. </p>
                    <p>Accounting & Taxation, Finance, Information & Technology and Banking & Insurance electives are offered in the fifth and the sixth semesters. Students are required to undertake project work during the fifth and the sixth semesters. The course imparts high level of knowledge and competence to effectively contribute to the society with commitment and integrity.</p>
                </div>
            </div>
            <div className={"img-div hide-on-mb"} ref={imgDivRef}>
                <picture>
                    {BCOMPPOne.webp && <source type={"image/webp"} srcSet={BCOMPPOne.webp}/>}
                    {
                        BCOMPPOne.type === "jpg" && <img src={BCOMPPOne.jpg} alt={BCOMPPOne.alt} width={BCOMPPOne.w} height={BCOMPPOne.h}  onLoad={handleResize}/>
                    }
                    {
                        BCOMPPOne.type === "png" && <img src={BCOMPPOne.png} alt={BCOMPPOne.alt} width={BCOMPPOne.w} height={BCOMPPOne.h}  onLoad={handleResize}/>
                    }                        
                </picture>
            </div>
        </div>
    )
}

export default SectionOne;