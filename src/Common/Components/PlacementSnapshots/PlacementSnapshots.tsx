import { SplideOptions } from "@splidejs/splide";
import { useMemo } from "react";
import { 
    PlacementSnapshots as PlacementSnapshotsData
 } from "../../../Assets/Assets";
import { IImage } from "../../../Utils/js/Utils";
import { SplideSlider } from "../Components";
import { SplideSlide } from "../SplideSlider/SplideSlide";
import "./PlacementSnapshots.scss";

interface IPlacementSnapshotCard {
    img: IImage, companyImg: IImage, name: string,
}
const PlacementSnapshotCard = ({img, companyImg, name}: IPlacementSnapshotCard) => {
    return (
        <>
            <div className={"placement-snapshot-card"}>
                <div className={"card-panel"}>
                    <div className={"img-div"}>
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
                    <div className={"content"}>
                        <h5 className={"name"}>{name}</h5>
                        <div className={"company-img-div"}>
                            <picture>
                                {companyImg.webp && <source type={"image/webp"} srcSet={companyImg.webp}/>}
                                {
                                    companyImg.type === "jpg" && <img src={companyImg.jpg} alt={companyImg.alt} width={companyImg.w} height={companyImg.h} />
                                }
                                {
                                    companyImg.type === "png" && <img src={companyImg.png} alt={companyImg.alt} width={companyImg.w} height={companyImg.h} />
                                }                        
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const PlacementSnapshots = () => {
    const slides = useMemo(() => {
        return PlacementSnapshotsData.map((p, i) => {
            return (
                <SplideSlide key={i}>
                    <PlacementSnapshotCard {...p}/>
                </SplideSlide>
            )
        })
    }, []);

    // const slides = useMemo(() => {
    //     let slides = tJSX.map((slide, index) => {
    //         return {
    //             divClassName: "",
    //             slide: slide,
    //         } as IJSX
    //     })
    //     return {
    //         slides: slides,
    //     } as IJSXSlider;
    // }, [tJSX]);

    const sliderOptions = useMemo(() => {
        return {
            type : 'loop',
            perPage: 3,
            gap: 10,
            focus  : 'center',
            autoplay: true,
            interval: 5000,
            breakpoints: {
                767: {
                    perPage: 1
                },
                991: {
                    perPage: 2
                }
            }
        } as SplideOptions;
    }, []);

    return (
        <>
            <SplideSlider className={"placement-snapshots"} options={sliderOptions}>
                {slides}
            </SplideSlider>
        </>
    )
}

export default PlacementSnapshots;