import { forwardRef, useRef } from "react";

export interface ISplideSlide {
    children: React.ReactNode,
}
export const SplideSlide = forwardRef<HTMLLIElement, ISplideSlide>(({children}, ref) => {
    const slideRef = useRef<HTMLLIElement | null>(null);
    return (
        <li className="splide__slide" ref={(s) => {
            slideRef.current = s;
            // assign the button to ref(passed from parent component)
            if (typeof ref === "function") { // handle callback ref
                ref(s);
            }
            else if (ref) { // handle object ref
                ref.current = s;
            }
        }}>
            {children}
        </li>
    )
});