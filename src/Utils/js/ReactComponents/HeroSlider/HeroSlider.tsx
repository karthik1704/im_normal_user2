import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IImage } from "../../Common/Common";

export interface HeroSlideData {
    img: IImage, heading?: string, para?: string, uniqueID: string,
    resizeSliderCallback?: (({ height }: { height: number; }) => void),
}
export interface HeroSliderData {
    slides:  HeroSlideData[],
}

export const HeroSlide = ({img, heading, para, uniqueID, resizeSliderCallback}: HeroSlideData) => {
    const imgContainerRef = useRef<HTMLDivElement>(null);
    const childContainerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const paraRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!childContainerRef.current)
            return;
    }, [])

    const resizeContainer = useCallback(() => {
        if (!imgContainerRef.current || !childContainerRef.current)
            return;

        let img = imgContainerRef.current.getElementsByTagName("img")[0];
        childContainerRef.current.style.height = img.offsetHeight + "px";

        if (headingRef.current && paraRef.current) {
            let headingDummy = headingRef.current.getElementsByClassName("heading-div-dummy")[0] as HTMLDivElement;
            headingDummy.style.height = headingRef.current.offsetHeight + "px";
    
            let paraDummy = paraRef.current.getElementsByClassName("para-div-dummy")[0] as HTMLDivElement;
            paraDummy.style.height = paraRef.current.offsetHeight + "px";
        }

        if (resizeSliderCallback) {
            resizeSliderCallback({height: img.offsetHeight});
        }
    }, [imgContainerRef, childContainerRef, resizeSliderCallback])

    useEffect(() => {
        if (!imgContainerRef.current || !childContainerRef.current)
            return;
        
        let img = imgContainerRef.current.getElementsByTagName("img")[0];
        img.addEventListener("load", resizeContainer);
        window.addEventListener("resize", resizeContainer);

        return () => {
            img.removeEventListener("load", resizeContainer);
            window.removeEventListener("resize", resizeContainer);
        }
    }, [resizeContainer]);

    useEffect(() => {
        if (!imgContainerRef.current || !childContainerRef.current)
           return;

        let childContainer = childContainerRef.current;
        let imgContainer = imgContainerRef.current;
        
        anime({
            targets: childContainer,
            translateX: [
                {value: -window.innerWidth, duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 0},
                {value: window.innerWidth, duration: 1000, delay: 12000},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

        anime({
            targets: imgContainer,
            translateX: [
                {value: -window.innerWidth, duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 1000},
                {value: window.innerWidth, duration: 1000, delay: 12000},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

        if (headingRef.current && paraRef.current) {
            let headingDummy = headingRef.current.getElementsByClassName("heading-div-dummy")[0] as HTMLDivElement;
            let paraDummy = paraRef.current.getElementsByClassName("para-div-dummy")[0] as HTMLDivElement;

            let headingDiv = headingRef.current.getElementsByClassName("heading-div")[0] as HTMLDivElement;
            let paraDiv = paraRef.current.getElementsByClassName("para-div")[0] as HTMLDivElement;

            anime({
                targets: [headingDummy, paraDummy],
                translateX: [
                    {value: -window.innerWidth, duration: 0, delay: 0},
                    {value: 0, duration: 1000, delay: 2000},
                    {value: window.innerWidth, duration: 3000, delay: 50},
                ],
                // easing: 'linear'
            });

            anime({
                targets: [headingDiv, paraDiv],
                translateX: [
                    {value: -window.innerWidth, duration: 0, delay: 0},
                    {value: 0, duration: 500, delay: 2500},
                    {value: window.innerWidth, duration: 1000, delay: 12000},
                ],
                // easing: 'linear'
            });
        }
    }, [childContainerRef, uniqueID])


    return (
        <>
            <div className={"child-container " + uniqueID} ref={childContainerRef}>
                <div className={"img-container " + uniqueID} ref={imgContainerRef}>
                    <picture>
                        {img.webp && <source type={"image/webp"} srcSet={img.webp}/>}
                        {
                            img.type === "jpg" && <img src={img.jpg} alt={img.alt} width={img.w} height={img.h} />
                        }
                        {
                            img.type === "png" && <img src={img.png} alt={img.alt} width={img.w} height={img.h} />
                        }                        
                    </picture>
                </div>
                <div className={"content"}>
                    {
                        heading && para && (
                            <>
                                <div className={"heading-div-container"} ref={headingRef}>
                                    <div className={"heading-div-dummy " + uniqueID}></div>
                                    <div className={"heading-div " + uniqueID}>
                                        <p>{heading}</p>
                                    </div>
                                </div>
                                <div className={"para-div-container"} ref={paraRef}>
                                    <div className={"para-div-dummy " + uniqueID}></div>
                                    <div className={"para-div " + uniqueID}>
                                        <p>{para}</p>
                                        <button className={"button bg-deep-orange-600"}>Join Now</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export const HeroSlider = ({slides}: HeroSliderData) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [counter, setCounter] = useState(0);

    const sliderRef = useRef<HTMLDivElement>(null);
    const resizeSliderCallback = useCallback(({height = 0}) => {
        if(!sliderRef.current)
            return;

        sliderRef.current.style.height = height + "px";
    }, [])

    const slidesJSX = useMemo(() => {
        return slides.map((slide, index) => {
            let key = (slide.uniqueID)? slide.uniqueID + index : index;
            return <HeroSlide {...slide} key={key} resizeSliderCallback={resizeSliderCallback}/>
        })
    }, [slides, resizeSliderCallback]);

    useEffect(() => {
        const timer = setInterval(() => {
            let totalSlides = slidesJSX.length;

            setCurrentSlide((prev) => (prev + 1) % totalSlides)
            setCounter(counter + 1);
        }, 14000);
        return () => clearInterval(timer);
    }, [counter, slidesJSX]);

    return (
        <>
            <div className={"hero-slider"} ref={sliderRef}>
                {slidesJSX[currentSlide]}
            </div>
        </>
    )
}