import anime, { AnimeInstance } from "animejs";
import { useEffect, useMemo, useRef } from "react";

export interface IJSX {
    slide: JSX.Element,
    divClassName: string,
}
export interface IJSXSlider {
    slides: IJSX[],
    setAnimeInstanceCallback?: React.Dispatch<React.SetStateAction<anime.AnimeInstance[]>>,
}
export const JSXSlider = ({slides, setAnimeInstanceCallback}: IJSXSlider) => {

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        let sliderDivs = sliderRef.current.querySelectorAll(".slider-div");
        let durationObjects = Array.from(sliderDivs).map((sliderDiv, index) => {
            return {
                value: "-" + (100 * (index + 1)) + "%", duration: 1500, delay: 2000
            }
        })
        let _animeInstances = [] as AnimeInstance[];
        sliderDivs.forEach((sliderDiv, index) => {
            if (!sliderRef.current) return;
            let anim = anime({
                targets: sliderDiv,
                translateX: [
                    {value: sliderRef.current.clientWidth, duration: 0, delay: 0},
                    {value: "0%", duration: 2500, delay: 500},
                    ...durationObjects,
                    {value: sliderRef.current.clientWidth, duration: 0, delay: 0},
                ],
                // easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
                loop: true,
            });
            _animeInstances.push(anim);
        })
        if (setAnimeInstanceCallback) {
            setAnimeInstanceCallback(_animeInstances);
        }
    }, [sliderRef, setAnimeInstanceCallback]);

    const slidesJSX = useMemo(() => {
        return slides.map((slide, index) => {
            return (
                <div className={"slider-div " + slide.divClassName} key={index}>
                    {slide.slide}
                </div>
            )
        });
    }, [slides])

    return (
        <>
            <div className={"jsx-slider"} ref={sliderRef}>
                {slidesJSX}
            </div>
        </>
    )
}

export default JSXSlider;