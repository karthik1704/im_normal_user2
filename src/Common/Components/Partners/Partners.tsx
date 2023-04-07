import { useMemo } from "react";
import { IImage, IJSX, IJSXSlider, JSXSlider } from "../../../Utils/js/Utils";

import {
    AICTELogo, BangloreUniversityLogo, IAEBordeauxUniversitySchoolOfManagementLogo, IAEGrenobleLogo, JCULogo,
    SIMGroupLogo, ShriLogo, StaffordshireUniversityLogo, UniversityOfStirlingLogo,
} from "../../../Assets/Assets";

import "./Partners.scss";

export interface IPartner {
    img: IImage,
    divClassName: string,
}
export const Partner = ({divClassName, img}: IPartner) => {
    return (
        <>
            <div className={"partner " + divClassName}>
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
                </div>
            </div>
        </>
    )
}
export const Partners = () => {

    const partnersData = useMemo(() => {
        return [
            {
                img: JCULogo,
                divClassName: "SingaporecampusofJamesCookUniversity",
            },
            {
                img: BangloreUniversityLogo,
                divClassName: "BangloreUniversityLogo",
            },
            {
                img: UniversityOfStirlingLogo,
                divClassName: "UniversityOfStirlingLogo",
            },
            {
                img: IAEBordeauxUniversitySchoolOfManagementLogo,
                divClassName: "IAEBordeauxUniversitySchoolOfManagementLogo",
            },
            {
                img: ShriLogo,
                divClassName: "ShriLogo",
            },
            {
                img: IAEGrenobleLogo,
                divClassName: "IAEGrenobleLogo",
            },
            {
                img: StaffordshireUniversityLogo,
                divClassName: "StaffordshireUniversityLogo",
            },
            {
                img: SIMGroupLogo,
                divClassName: "SIMGroupLogo",
            },
            {
                img: AICTELogo,
                divClassName: "AICTELogo",
            },
        ] as IPartner[];
    }, []);


    const partnersJSX = useMemo(() => {
        return partnersData.map((partner, index) => {
            return <Partner {...partner}/>
        })
    }, [partnersData]);

    const slides = useMemo(() => {
        let slides = partnersJSX.map((slide, index) => {
            return {
                divClassName: "",
                slide: slide,
            } as IJSX
        })
        return {
            slides: slides,
        } as IJSXSlider;
    }, [partnersJSX]);

    return (
        <>
            <div className={"partners"}>
                <JSXSlider slides={slides.slides}/>
            </div>
        </>
    )
}

export default Partners;