import { IImage } from "../../../Utils/js/Utils";
import "./PageLocation.scss";

interface PageLocationParams {
    title: string,
    locations: string[],
    img?: IImage,
}

const PageLocation = ({title, locations, img}: PageLocationParams) => {

    let content = locations.map( (location, index, locations) => {
        if (index === locations.length - 1) {
            return <span key={index}>{location}</span>
        }
        return (
            <span key={index}><span key={index}>{location} </span> <span><i className={"material-icons"}>chevron_right</i></span></span>
        )
    })

    return (
        <>
            <div className={"page-location"}>
                {
                    img && (
                        <div className={"img-div"}>
                            <picture>
                                <source type={"image/webp"} srcSet={img.webp} />
                                { img.type === "jpg" && <img src={img.jpg} alt={img.alt} width={img.w} height={img.h} />}
                                { img.type === "png" && <img src={img.png} alt={img.alt} width={img.w} height={img.h} />}
                            </picture>
                        </div>
                    )
                }
                <div className={"page-location-layer"}></div>
                <div className={"page-location-content white"}>
                    <h4 className={"t-align-center hide-on-mb"}>{title}</h4>
                    <h6 className={"t-align-center hide-on-t hide-on-d"}>{title}</h6>
                    <p className={"t-align-center white"}>
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PageLocation;