import { SplideOptions } from "@splidejs/splide";
import { useMemo } from "react";
import { IImage } from "../../../Utils/js/Utils";
import { SplideSlide } from "../SplideSlider/SplideSlide";
import { SplideSlider } from "../SplideSlider/SplideSlider";
import "./CardSlider.scss";

export interface ICard {
    img: IImage
    divClassName: string,
    content: string,
    contentTwo?: string,
}
export interface ICardSlider {
    cards: ICard[],
    imgLoadCallback: () => void;
}
export const CardSlider = ({cards, imgLoadCallback}: ICardSlider) => {
    const cardsJSX = useMemo(() => {
        return cards.map((card, index) => {
            return (
                <SplideSlide key={index}>
                    <div className={"card-panel-wrapper " + card.divClassName}>
                        <div className={"card-panel"}>
                            <div className={"img-div"}>
                                <picture>
                                    {card.img.webp && <source type={"image/webp"} srcSet={card.img.webp}/>}
                                    {
                                        card.img.type === "jpg" && <img src={card.img.jpg} alt={card.img.alt} width={card.img.w} height={card.img.h} onLoad={imgLoadCallback}/>
                                    }
                                    {
                                        card.img.type === "png" && <img src={card.img.png} alt={card.img.alt} width={card.img.w} height={card.img.h} onLoad={imgLoadCallback}/>
                                    }                        
                                </picture>
                            </div>
                            <div className={"content-div"}>
                                <p className={"content"}>{card.content}</p>
                                <p className={"content-two"}>{card.contentTwo}</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            )
        });
    }, [cards, imgLoadCallback])

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

    return (
        <>
            <SplideSlider className={"card-slider"} options={sliderOptions}>
                {cardsJSX}
            </SplideSlider>
        </>
    )
}

export default CardSlider;