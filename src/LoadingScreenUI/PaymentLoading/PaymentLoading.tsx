import anime from "animejs";
import { useEffect, useRef } from "react";
import "./PaymentLoading.scss";

const PaymentLoading = () => {

    const innerBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!innerBarRef.current) return;
        let anim = anime({
            targets: innerBarRef.current,
            translateX: [
                {value: "-100%", duration: 0, delay: 0},
                {value: "400%", duration: 1000, delay: 0},
            ],
            loop: true,
            autoplay: true,
            easing: "easeInOutSine",
        })
        return () => {
            anim.pause();
        }
    }, []);

    return (
        <>
            <div className={"Loading"}>
                <div className={"bar"}>
                <h6>Processing Payment... Please wait</h6>
                    <div className={"inner-bar"} ref={innerBarRef}></div>
                </div>
            </div>
        </>
    )
}

export default PaymentLoading;