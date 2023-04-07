import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isInViewportThreshold } from "../../Helpers/Helpers";

export interface IFontAwesomeCard {
    svgName: IconProp,
    divClassName: string,
    content: string,
    contentTwo?: string,
}
export const Card = ({svgName, divClassName, content, contentTwo}: IFontAwesomeCard) => {

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
                    <div className={"fontawesome-container"}>
                        <FontAwesomeIcon icon={svgName} />
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

export interface IFontAwesomeCards {
    cards: IFontAwesomeCard[]
}
export const FontAwesomeCards = ({cards}: IFontAwesomeCards) => {
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
            <div className={"fontawesome-cards"}>
                <div className={"col-wrapper-24"}>
                    {cardsJSX}
                </div>
            </div>
        </>
    )
}