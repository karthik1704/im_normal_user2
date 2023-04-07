import anime from "animejs";
import { useEffect, useMemo, useRef } from "react";
import { IImage as ICommonImage } from "../../Utils";

export interface IImage {
    divClassName: string,
}
export interface IImageSlider {
    imgs: (IImage & ICommonImage)[],
}
export const ImageSlider = ({imgs}: IImageSlider) => {

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        let imgDivs = sliderRef.current.querySelectorAll(".img-div");
        let durationObjects = Array.from(imgDivs).map((imgDiv, index) => {
            return {
                value: "-" + (100 * (index + 1)) + "%", duration: 1500, delay: 2000
            }
        })

        imgDivs.forEach((imgDiv, index) => {
            if (!sliderRef.current) return;
            anime({
                targets: imgDiv,
                translateX: [
                    {value: sliderRef.current.clientWidth, duration: 0, delay: 0},
                    {value: "0%", duration: 2500, delay: 500},
                    ...durationObjects,
                    {value: sliderRef.current.clientWidth, duration: 0, delay: 0},
                ],
                // easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
                loop: true,
            });
        })
    }, [sliderRef])

    const imgJSX = useMemo(() => {
        return imgs.map((img, index) => {
            return (
                <div className={"img-div " + img.divClassName} key={index}>
                    {/* <img src={img.src} alt={img.alt}/> */}
                    <picture>
                        {img.webp && <source type={"image/webp"} srcSet={img.webp}/>}
                        {
                            img.type === "jpg" && <img src={img.jpg} alt={img.alt} width={img.w} height={img.h} />
                        }
                        {
                            img.type === "png" && <img src={img.png} alt={img.alt} width={img.w} height={img.h} />
                        }                        
                    </picture>
                </div>
            )
        });
    }, [imgs])

    return (
        <>
            <div className={"image-slider"} ref={sliderRef}>
                {imgJSX}
            </div>
        </>
    )
}

export default ImageSlider;