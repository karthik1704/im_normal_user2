import { SplideOptions } from "@splidejs/splide";
import { useMemo } from "react";
import { CommonImg, SplideSlide, SplideSlider } from "../Components";
import {
    InternationalExchange1, InternationalExchange10, InternationalExchange11, InternationalExchange12,
    InternationalExchange13, InternationalExchange14, InternationalExchange15, InternationalExchange16,
    InternationalExchange2, InternationalExchange3, InternationalExchange4, InternationalExchange5,
    InternationalExchange6, InternationalExchange8, InternationalExchange9,
} from "../../../Assets/Assets";

import "./InternationalExchange.scss";

export const InternationalExchange = () => {
    const sliderData = useMemo(() => {
        return {
            slides: [
                { img: InternationalExchange1},
                { img: InternationalExchange2},
                { img: InternationalExchange3},
                { img: InternationalExchange4},
                { img: InternationalExchange5},
                { img: InternationalExchange6},
                { img: InternationalExchange8},
                { img: InternationalExchange9},
                { img: InternationalExchange10},
                { img: InternationalExchange11},
                { img: InternationalExchange12},
                { img: InternationalExchange13},
                { img: InternationalExchange14},
                { img: InternationalExchange15},
                { img: InternationalExchange16},
            ]
        };
    }, []);

    const sliderOptions = useMemo(() => {
        return {
            type : 'loop',
            perPage: 3,
            gap: 10,
            focus  : 'center',
            autoplay: true,
            interval: 5000,
            breakpoints: {
                767: {
                    perPage: 1
                },
                991: {
                    perPage: 2
                }
            }
        } as SplideOptions;
    }, []);

    const slideImgs = useMemo(() => {
        return sliderData.slides.map((slide, i) => {
            return (
                <SplideSlide key={i}>
                    <CommonImg img={slide.img} />
                </SplideSlide>
            )
        })
    }, [sliderData]);

    return (
        <>
            <div className={"international-exchange"}>
                <h5 className={"heading"}>International Exchange & Twinning Programs</h5>
                <SplideSlider className={"international-exchange-slider"} options={sliderOptions}>
                    {slideImgs}
                </SplideSlider>
            </div>
        </>
    )
}
