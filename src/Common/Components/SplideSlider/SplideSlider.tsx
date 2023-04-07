import Splide, { SplideOptions } from "@splidejs/splide";
import { forwardRef, useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "./SplideSlider.scss";

export interface ISplideSlider {
    children: React.ReactNode,
    options?: SplideOptions | undefined,
}
export const SplideSlider = forwardRef<HTMLDivElement, ISplideSlider & React.HTMLProps<HTMLDivElement>>((
    {children, className, options, ...props}, ref,
) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    // const app = useSelector((state: {app: IApp}) => state.app);

    useEffect(() => {
        if (!sliderRef.current) return;

        new Splide(sliderRef.current, options).mount();
    }, [options]);

    // const rerenderFlag = useMemo(() => {
    //     return (app.allPagePopupForm.isHidden || app.allPagePopupForm.isHiddenPermanent)? Math.random() : Math.random();
    // }, [app.allPagePopupForm.isHidden, app.allPagePopupForm.isHiddenPermanent]);

    return (
        <div className={`splide ${className?className:""}`} {...props} ref={(s) => {
            sliderRef.current = s;
            // assign the button to ref(passed from parent component)
            if (typeof ref === "function") { // handle callback ref
                ref(s);
            }
            else if (ref) { // handle object ref
                ref.current = s;
            }
        }}>
            <div className="splide__track">
                <ul className="splide__list">
                    {children}
                </ul>
            </div>
        </div>
    )
});

export * from "./SplideSlide";