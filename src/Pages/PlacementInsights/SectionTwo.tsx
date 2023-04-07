import { IBMRGlobalAlumniNetwork, IBMRNationalAlumniNetwork } from '../../Assets/Assets';

const SectionTwo = () => {
    return (
        <>
            <div className={"section-two"}>
                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-12 d-col-12"}>
                        <div className={"card-panel"}>
                            <div className={"heading-div"}>
                                <h5 className={""}>NATIONAL ALUMNI NETWORK</h5>
                                <p>ALUMNI WORKING IN 23 CITIES</p>
                            </div>
                            <div className={"img-div"}>
                                <picture>
                                    {IBMRNationalAlumniNetwork.webp && <source type={"image/webp"} srcSet={IBMRNationalAlumniNetwork.webp}/>}
                                    {
                                        IBMRNationalAlumniNetwork.type === "jpg" && <img src={IBMRNationalAlumniNetwork.jpg} alt={IBMRNationalAlumniNetwork.alt} width={IBMRNationalAlumniNetwork.w} height={IBMRNationalAlumniNetwork.h} />
                                    }
                                    {
                                        IBMRNationalAlumniNetwork.type === "png" && <img src={IBMRNationalAlumniNetwork.png} alt={IBMRNationalAlumniNetwork.alt} width={IBMRNationalAlumniNetwork.w} height={IBMRNationalAlumniNetwork.h} />
                                    }
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-24 t-col-12 d-col-12"}>
                        <div className={"card-panel"}>
                            <div className={"heading-div"}>
                                <h5 className={""}>GLOBAL ALUMNI NETWORK</h5>
                                <p>ALUMNI WORKING IN 13 COUNTRIES</p>
                            </div>
                            <div className={"img-div"}>
                                <picture>
                                    {IBMRGlobalAlumniNetwork.webp && <source type={"image/webp"} srcSet={IBMRGlobalAlumniNetwork.webp}/>}
                                    {
                                        IBMRGlobalAlumniNetwork.type === "jpg" && <img src={IBMRGlobalAlumniNetwork.jpg} alt={IBMRGlobalAlumniNetwork.alt} width={IBMRGlobalAlumniNetwork.w} height={IBMRGlobalAlumniNetwork.h} />
                                    }
                                    {
                                        IBMRGlobalAlumniNetwork.type === "png" && <img src={IBMRGlobalAlumniNetwork.png} alt={IBMRGlobalAlumniNetwork.alt} width={IBMRGlobalAlumniNetwork.w} height={IBMRGlobalAlumniNetwork.h} />
                                    }
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTwo;