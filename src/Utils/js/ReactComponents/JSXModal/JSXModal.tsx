import React, { useCallback, useEffect, useRef } from "react";
import Portal from "../Portal/Portal";

export interface IJSXModal {
    children?: React.ReactNode,
    portalRootClassName?: string | "jsx-modal-root",
    isShown: boolean,
    toggleCallback: () => void,
}
export const JSXModal = ({children, portalRootClassName, isShown, toggleCallback}: IJSXModal) => {

    const overlayRef = useRef<HTMLDivElement>(null);
    const cardPanelRef = useRef<HTMLDivElement>(null);

    const handleResize = useCallback(() => {
        if (!overlayRef.current || !cardPanelRef.current) return;
        overlayRef.current.style.width = window.innerWidth + "px";
        overlayRef.current.style.height = window.innerHeight + "px";
        cardPanelRef.current.style.maxHeight = window.innerHeight * 70 / 100 + "px";
        cardPanelRef.current.style.marginTop = window.innerHeight * 5 / 100 + "px";
    }, [overlayRef, cardPanelRef])

    useEffect(() => {
        if (isShown)
            handleResize();
    }, [handleResize, isShown]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("touchmove", handleResize);
        window.addEventListener("touchend", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("touchmove", handleResize)
            window.removeEventListener("touchend", handleResize);
        };
    }, [handleResize]);

    return (
        <>
            {
                isShown &&
                    <Portal className={portalRootClassName}>
                        <div className={"jsx-modal"} ref={overlayRef} role={"dialog"}>
                            <div className={"card-panel content-panel"} ref={cardPanelRef}>
                                {children}
                            </div>
                            <div className={"button-div t-align-right"}>
                                <button onClick={toggleCallback} className={"button"}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </Portal>
            }
        </>
    )
}

export default JSXModal;