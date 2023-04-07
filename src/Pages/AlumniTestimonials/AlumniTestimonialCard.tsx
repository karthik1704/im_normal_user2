import { useCallback, useState } from "react";
import { IImage, JSXModal } from "../../Utils/js/Utils";

export interface IAlumniTestimonialCard {
    img: IImage, content: string, name: string, companyName: string,
}
const AlumniTestimonialCard = ({img, content, name, companyName}: IAlumniTestimonialCard) => {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = useCallback(() => {
        setIsShown(!isShown);
    }, [isShown]);
    
    return (
        <>
            <div className={"alumni-testimonial-card"}>
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
                    <h6 className={"company-name"}>{companyName}</h6>
                    <p>{content}</p>
                    <div>
                        <div className={"modal-trigger-button"}>
                            <button className={"button bg-deep-orange-600"} onClick={toggleShown}>KNOW MORE</button>
                        </div>                                
                        <JSXModal toggleCallback={toggleShown} isShown={isShown}>
                            <p>{content}</p>
                        </JSXModal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlumniTestimonialCard;