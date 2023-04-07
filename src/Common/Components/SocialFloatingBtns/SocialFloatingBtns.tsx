import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialFloatingBtns.scss";

export const SocialFloatingBtns = () => {
    return (
        <div className={"social-floating-btns"}>
            <div className={"social-links"}>
                <a target={"_blank"} rel="noreferrer" href={"https://www.facebook.com/aimsibs/"}><FontAwesomeIcon icon={faFacebookF}/></a>
                <a target={"_blank"} rel="noreferrer" href={"https://www.instagram.com/aimsibs/"}><FontAwesomeIcon icon={faInstagram}/></a>
                <a target={"_blank"} rel="noreferrer" href={"https://www.youtube.com/c/AIMSIBS"}><FontAwesomeIcon icon={faYoutube}/></a>
                <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/company/aims-ibs/"}><FontAwesomeIcon icon={faLinkedinIn}/></a>
            </div>
        </div>
    )
}