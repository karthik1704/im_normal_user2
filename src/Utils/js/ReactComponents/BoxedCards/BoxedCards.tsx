import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IImage } from "../../Common/Common";
import { isInViewportThreshold } from "../../Helpers/Helpers";

export interface ICard {
    img: IImage
    divClassName: string,
    content: string,
    contentTwo?: string,
    imgLoadCallback?: () => void,
}
export const Card = ({img, divClassName, content, contentTwo, imgLoadCallback}: ICard) => {

    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateY: [
                {value: "100px", duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 0},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 0},
                {value: 1, duration: 1000, delay: 0},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);

    return (
        <>
            <div className={"card-panel-wrapper " + divClassName}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <div className={"img-div"}>
                        <picture>
                            {img.webp && <source type={"image/webp"} srcSet={img.webp}/>}
                            {
                                img.type === "jpg" && <img src={img.jpg} alt={img.alt} width={img.w} height={img.h} onLoad={imgLoadCallback}/>
                            }
                            {
                                img.type === "png" && <img src={img.png} alt={img.alt} width={img.w} height={img.h} onLoad={imgLoadCallback}/>
                            }                        
                        </picture>
                    </div>
                    <div className={"content-div"}>
                        <p className={"content"}>{content}</p>
                        <p className={"content-two"}>{contentTwo}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IBoxedCards {
    cards: ICard[]
}
export const BoxedCards = ({cards}: IBoxedCards) => {
    const cardsJSX = useMemo(() => {
        return cards.map((card, index) => {
            return (
                <div className={"mb-col-24 t-col-12 d-col-8"} key={index}>
                    <Card {...card}/>
                </div>
            )
        });
    }, [cards]);

    return (
        <>
            <div className={"boxed-cards"}>
                <div className={"col-wrapper-24"}>
                    {cardsJSX}
                </div>
            </div>
        </>
    )
}