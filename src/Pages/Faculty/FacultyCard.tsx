import React, { useCallback, useState } from "react";
import { IImage, JSXModal } from "../../Utils/js/Utils";

export interface IFacultyCard {
    img: IImage, contentOne: string,
    contentTwo: string, name: string, modalContent?: React.ReactNode,
}
const FacultyCard = ({img, contentOne, contentTwo, name, modalContent}: IFacultyCard) => {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = useCallback(() => {
        setIsShown(!isShown);
    }, [isShown]);
    
    return (
        <>
            <div className={"faculty-card"}>
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
                    <p>{contentOne}</p>
                    <p>{contentTwo}</p>
                    <div>                              
                        {
                            modalContent && 
                                <>
                                    <div className={"modal-trigger-button"}>
                                        <button className={"button bg-deep-orange-600"} onClick={toggleShown}>KNOW MORE</button>
                                    </div>
                                    <JSXModal toggleCallback={toggleShown} isShown={isShown}>
                                        {modalContent}
                                    </JSXModal>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacultyCard;