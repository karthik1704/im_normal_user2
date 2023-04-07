import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isInViewport } from "../../../Utils/js/Utils";
import "./AchievementCounter.scss";

interface AchievementCounterIndividualData {
    counterValueStart: number,
    counterValueEnd: number,
    counterPostfix: string,
    content: string,
}
const AchievementCounterIndividual = ({counterValueStart, counterValueEnd, counterPostfix, content }: AchievementCounterIndividualData) => {

    const counterRef = useRef<HTMLDivElement>(null);
    const counterSpanRef = useRef<HTMLSpanElement>(null);
    const [animate, setAnimate] = useState(false);
    
    const resize = () => {
        if (!counterRef.current) return;
        counterRef.current.style.minHeight = `${counterRef.current.offsetWidth}px`;
    }

    const handleScroll = useCallback(() => {   
        if(!counterRef.current) return;
        if (isInViewport(counterRef.current)) {
            setAnimate(true);
        }
    }, [])

    useEffect( () => {
        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    useEffect(() => {
        if (!animate) return;
        if (!counterSpanRef.current) return;
        anime({
            targets: counterSpanRef.current,
            textContent: [counterValueStart, counterValueEnd],
            round: 1,
            easing: "linear",
            duration: 3000,
        });
    }, [counterSpanRef, counterValueStart, counterValueEnd, animate]);

    return (
        <>
            <div className={"achievement-counter-individual card-panel"} ref={counterRef}>
                <div>
                    <div className={"counter-div t-align-center"}>
                        <p className={"counter"}><span className={"number"} ref={counterSpanRef}>{counterValueStart}</span>{counterPostfix}</p>
                    </div>
                    <div className={"content-div t-align-center"}>
                        <p className={"content"}>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const AchievementCounter = () => {

    const achievementCounterIndividualDataArray = useMemo(() => {
        return [
            {
                counterValueStart: 0, counterValueEnd: 4, counterPostfix: "+", content: "Campuses Across India", 
            },
            {
                counterValueStart: 0, counterValueEnd: 90, counterPostfix: "+", content: "Industry Experts on Board", 
            },
            {
                counterValueStart: 0, counterValueEnd: 7, counterPostfix: "+", content: "Partner Institutions in 4 Countries", 
            },
            {
                counterValueStart: 0, counterValueEnd: 4300, counterPostfix: "+", content: "Companies Recruited", 
            },
            {
                counterValueStart: 0, counterValueEnd: 50, counterPostfix: "%", content: "Recruiters are TOP MNCs", 
            },
            {
                counterValueStart: 0, counterValueEnd: 225, counterPostfix: "+", content: "Strong Faculties & Trainers", 
            },
        ] as AchievementCounterIndividualData[];
    }, [])

    const achievementCounterIndividuals = useMemo(() => {
        return achievementCounterIndividualDataArray.map((a, i) => {
            return (
                <div className={"xs-col-24 s-col-12 t-col-8 d-col-4"} key={i}>
                    <AchievementCounterIndividual {...a}/>
                </div>
            )
        })
    }, [achievementCounterIndividualDataArray])

    return (
        <>
            <div className={"achievement-counter-div"}>
                <h5 className={"achievement-counter-heading"}>AIMS-IBS an institution to reach new heights</h5>
                <div className={"achievement-counter"}>
                    <div className={"col-wrapper-24"}>
                        {achievementCounterIndividuals}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AchievementCounter;