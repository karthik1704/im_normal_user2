import { forwardRef, HTMLAttributes, useRef } from "react";
import { IImage } from "../../../Utils/js/Utils";
import "./CommonImg.scss";

export interface ICommonImg {
    img: IImage | undefined,
    divClassName?: string | undefined,
}
export const CommonImg = forwardRef<HTMLDivElement, ICommonImg & HTMLAttributes<HTMLImageElement>>(({divClassName, img, ...props}, ref) => {
    const imgDivRef = useRef<HTMLHeadingElement | null>(null);
    return (
        <div className={`common-img-div ${divClassName?divClassName:""}`} ref={(i) => {
            imgDivRef.current = i;
            // assign the button to ref(passed from parent component)
            if (typeof ref === "function") { // handle callback ref
                ref(i);
            }
            else if (ref) { // handle object ref
                ref.current = i;
            }
        }}>
            {
                img && (
                    <picture>
                        { img.webp && <source type={"image/webp"} srcSet={img.webp} /> }
                        <img
                            src={img.type === "jpg"?img.jpg:img.png}
                            alt={img.alt?img.alt:""}
                            width={img.w}
                            height={img.h}
                            {...props}
                        />
                    </picture>
                )
            }
        </div>
    )
});