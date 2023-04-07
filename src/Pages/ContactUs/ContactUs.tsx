import { faHeadset, faMailBulk, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageLocation } from "../../Common/Components/Components";
import {CommonAdmissions, CommonGlobalExposure} from "../../Assets/Assets";
import "./ContactUs.scss";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - AIMS IBS</title>
                <meta name="description" content="Contact Us"/>
            </Helmet>
            <PageLocation img={CommonGlobalExposure} locations={["HOME", "CONTACT US"]} title={"CONTACT US"}/>
            <div className={"contact-us"}>
                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-12 d-col-8"}>
                        <div className={"contact-info-wrapper"}>
                            <div className={"card-panel"}>
                                <div className={"title-div"}>
                                    <div className={"icon-div"}>
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />                                    
                                    </div>
                                    <h5 className={"heading"}>REACH US</h5>
                                </div>
                                <div className={"address"}>
                                    <p>AIMS IBS</p>
                                    <p>#235, Bommasandra Industrial Area,</p>
                                    <p>3rd Phase KIADB, Near Electronics City,</p>
                                    <p>Hosur Main Road Bangalore - 560 099,</p>
                                    <p>Karnataka, INDIA.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-24 t-col-12 d-col-8"}>
                        <div className={"contact-info-wrapper"}>
                            <div className={"card-panel"}>
                                <div className={"title-div"}>
                                    <div className={"icon-div"}>
                                        <FontAwesomeIcon icon={faHeadset} />                                    
                                    </div>
                                    <h5 className={"heading"}>CALL US</h5>
                                </div>
                                <div className={"contact"}>
                                    <p><a href={"tel:+91-98455 26633"}>+91-77958 52804</a></p>
                                    <p><a href={"tel:+91-7847843111"}>+91-78478 43111</a></p>
                                    <p><a href={"tel:+91-98455 26633"}>+91-63640 50143</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"t-col-6 hide-on-mb hide-on-d"}></div>
                    <div className={"mb-col-24 t-col-12 d-col-8"}>
                        <div className={"contact-info-wrapper"}>
                            <div className={"card-panel"}>
                                <div className={"title-div"}>
                                    <div className={"icon-div"}>
                                        <FontAwesomeIcon icon={faMailBulk} />                                    
                                    </div>
                                    <h5 className={"heading"}>MAIL US</h5>
                                </div>
                                <div className={"mail"}>
                                    <p><a href={"mailto:info@aimsibs.com"}>info@aimsibs.com</a></p>
                                    <p><a href={"mailto:director@aimsibs.com"}>director@aimsibs.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"card-panel"}>
                    <div className={"contact-img-div"}>
                        <picture>
                            {CommonAdmissions.webp && <source type={"image/webp"} srcSet={CommonAdmissions.webp}/>}
                            {
                                CommonAdmissions.type === "jpg" && <img src={CommonAdmissions.jpg} alt={CommonAdmissions.alt} width={CommonAdmissions.w} height={CommonAdmissions.h} />
                            }
                            {
                                CommonAdmissions.type === "png" && <img src={CommonAdmissions.png} alt={CommonAdmissions.alt} width={CommonAdmissions.w} height={CommonAdmissions.h} />
                            }                        
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;