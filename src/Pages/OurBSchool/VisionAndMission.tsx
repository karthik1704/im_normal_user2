import anime from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mission, Vision } from "../../Assets/Assets";
import { isInViewportThreshold } from "../../Utils/js/Utils";

const VisionAndMission = () => {

    const visionCardPanelRef = useRef<HTMLDivElement>(null);
    const missionCardPanelRef = useRef<HTMLDivElement>(null);

    const [visionAnimate, setVisionAnimate] = useState(false);
    const [missionAnimate, setMissionAnimate] = useState(false);
    
    const handleScroll = useCallback(() => {

        if(!visionCardPanelRef.current) return;
        if (isInViewportThreshold(visionCardPanelRef.current, 50)) {
            setVisionAnimate(true);
        }
        if(!missionCardPanelRef.current) return;
        if (isInViewportThreshold(missionCardPanelRef.current, 50)) {
            setMissionAnimate(true);
        }
    }, []);

    const visionAnimation = useCallback(() => {
        if (!visionCardPanelRef.current) return;

        anime({
            targets: visionCardPanelRef.current,
            translateX: [
                {value: "-100px", duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 0},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 0},
                {value: 1, duration: 1000, delay: 0},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [visionCardPanelRef]);

    const missionAnimation = useCallback(() => {
        if (!missionCardPanelRef.current) return;

        anime({
            targets: missionCardPanelRef.current,
            translateX: [
                {value: "100px", duration: 0, delay: 200},
                {value: 0, duration: 1000, delay: 200},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 200},
                {value: 1, duration: 1000, delay: 200},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [missionCardPanelRef]);

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
        if (visionAnimate) {
            visionAnimation();
        }
    }, [visionAnimate, visionAnimation]);
    useEffect(() => {
        if (missionAnimate) {
            missionAnimation();
        }
    }, [missionAnimate, missionAnimation]);

    return (
        <>
            <div className={"vision-and-mission"}>
                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-1 t-col-1 d-col-1"}></div>
                    <div className={"mb-col-22 t-col-10 d-col-10"}>
                        <div className={"vision"} ref={visionCardPanelRef}>
                            <div className={"card-panel"}>
                                <h4 className={"heading t-align-center"}>VISION</h4>
                                <div className={"img-div"}>
                                    <picture>
                                        {Vision.webp && <source type={"image/webp"} srcSet={Vision.webp}/>}
                                        {
                                            Vision.type === "jpg" && <img src={Vision.jpg} alt={Vision.alt} width={Vision.w} height={Vision.h} />
                                        }
                                        {
                                            Vision.type === "png" && <img src={Vision.png} alt={Vision.alt} width={Vision.w} height={Vision.h} />
                                        }                        
                                    </picture>
                                </div>
                                <div className={"content"}>
                                    <p>“Our vision is to be one of the most innovative Business school offering value to students”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-1 t-col-1 d-col-1"}></div>
                    <div className={"mb-col-1 t-col-1 d-col-1"}></div>
                    <div className={"mb-col-22 t-col-10 d-col-10"}>
                        <div className={"mission"} ref={missionCardPanelRef}>
                            <div className={"card-panel"}>
                                <h4 className={"heading t-align-center"}>MISSION</h4>
                                <div className={"img-div"}>
                                    <picture>
                                        {Mission.webp && <source type={"image/webp"} srcSet={Mission.webp}/>}
                                        {
                                            Mission.type === "jpg" && <img src={Mission.jpg} alt={Mission.alt} width={Mission.w} height={Mission.h} />
                                        }
                                        {
                                            Mission.type === "png" && <img src={Mission.png} alt={Mission.alt} width={Mission.w} height={Mission.h} />
                                        }                        
                                    </picture>
                                </div>
                                <div className={"content"}>
                                    <p>Mission is to empower and serve student community by offering contemporary and quality education and training.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisionAndMission;