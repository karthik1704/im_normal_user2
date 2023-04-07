import { useMemo } from "react";
import { 
    PlacementRecruitersLogo,
} from "../../../Assets/Assets";

import "./Recruiters.scss";

const Recruiters = () => {
    let imgsJSX = useMemo(() => {
        return PlacementRecruitersLogo.map((img, i) => {
            return (
                <div className={"mb-col-8 t-col-4 d-col-3"}>
                    <div className={"card-panel"}>
                        <div className={"img-div"} key={i}>
                            <picture>
                                {img.img.webp && <source type={"image/webp"} srcSet={img.img.webp}/>}
                                {
                                    img.img.type === "jpg" && <img src={img.img.jpg} alt={img.img.alt} width={img.img.w} height={img.img.h} />
                                }                     
                            </picture>
                        </div>
                    </div>
                </div>
            )
        })
    }, [])

    return (
        <>
            <div className={"recruiters"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>RECRUITERS</h5>
                    <div className={"img-wrapper"}>
                        <div className={"col-wrapper-24"}>
                            {imgsJSX}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recruiters;