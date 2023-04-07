import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useMemo} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Logo } from "../../Assets/Assets";
import { unhideAllPagePopupForm } from "../../Store/Slices/App/AppSlice";
import { CommonForm, YoutubeEmbed } from "../Components/Components";
import { ROUTES } from "../Globals";

import "./Footer.scss";

const FooterForm = () => {

    // const programsDropdown = useMemo(() => {
    //     return {
    //         heading: "Select Programs *",
    //         items: [
    //             { content: "Undergraduate" },
    //             { content: "Postgraduate" }
    //         ]
    //     } as IDropdown;
    // }, [])

    return (
        <>
            <div className={"footer-form"}>
                <div className={"col-wrapper-24"}>
                    <div className={"hide-on-mb mb-col-1 t-col-12 d-col-12"}>
                        <div className={"footer-big-yt"}>
                            <YoutubeEmbed 
                                link={"https://www.youtube-nocookie.com/embed/NFOZdUPZru4"}
                                title={"Video"}
                                id={"footer-yt-iframe"}
                            />
                        </div>
                    </div>
                    <div className={"mb-col-1 hide-on-d hide-on-t"}></div>
                    <div className={"xl-col-3 hide-on-mb hide-on-t hide-on-l"}></div>
                    <div className={"mb-col-22 t-col-11 l-col-11 xl-col-8"}>
                        <div className={"footer-card-panel"}>
                            <div className={"card-panel"}>
                                <h5 className={"heading"}>Enquire Now for Scholarship Round Admission</h5>
                                <CommonForm formId={"footer"} type={"normal"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


interface QuickLinkData {
    title: string,
    href: string,
    isAnchor?: boolean,
    onClick?: () => void,
}
interface QuickLinksData {
    quickLinksData: QuickLinkData[],
}
const QuickLinkIndividual = ({title, href, isAnchor, onClick}: QuickLinkData) => {
    return (
        <>
            {
                isAnchor? (
                    <p><a href={href} className={"quick-link-individual"} onClick={onClick}>{title}</a></p>
                ): (
                    <p><Link to={href} className={"quick-link-individual"} onClick={onClick}>{title}</Link></p>
                )
            }            
        </>
    )
}
const Footer = () => {    
    const dispatch = useDispatch();
    const unhidePopupModal = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(unhideAllPagePopupForm());
    }, [dispatch]);

    const quickLinksOneData = useMemo(() => {
        return {
            quickLinksData: [
                { title: "Global Exposure", href: ROUTES["GLOBAL EXPOSURE"] },
                { title: "Key Differentiators", href: ROUTES["KEY DIFFERENTIATORS"] },
                { title: "Experience AIMS IBS", href: ROUTES["EXPERIENCE AIMS IBS"] },
                { title: "International Associations", href: ROUTES["INTERNATIONAL ASSOCIATIONS"] },
                { title: "Admission Process", href: ROUTES["ADMISSION PROCESS"] },
                { title: "Apply Online", href: "#!", onClick: unhidePopupModal },
                { title: "Faculty", href: ROUTES["FACULTY"] },
                { title: "Placement Insights", href: ROUTES["PLACEMENT INSIGHTS"] },
                { title: "Downloads", href: ROUTES["DOWNLOADS"] },
            ]
        } as QuickLinksData;
    }, [unhidePopupModal]);
    const quickLinksTwoData = useMemo(() => {
        return {
            quickLinksData: [
                { title: "Internship Insights", href: ROUTES["INTERNSHIP INSIGHTS"] },
                { title: "FAQ's", href: ROUTES["FAQS"] },
                { title: "Testimonials", href: ROUTES["TESTIMONIALS"] },
                { title: "Gallery", href: ROUTES["GALLERY"] },
                { title: "Rankings & Credentials", href: ROUTES["RANKINGS CREDENTIALS"] },
                { title: "Industry Partners", href: ROUTES["INDUSTRY/KNOWLEDGE PARTNERS"] },
                { title: "MBA (Bangalore University)", href: ROUTES["MBA (BANGALORE UNIVERSITY)"] },
                { title: "Certificate Courses", href: ROUTES["CERTIFICATION COURSES"] },
                { title: "Contact Us", href: ROUTES["CONTACT US"] },
            ]
        } as QuickLinksData;
    }, []);

    const QuickLinksOneJSX = useMemo(() => {
        return quickLinksOneData.quickLinksData.map((quickLink, index) => {
            return (
                <QuickLinkIndividual {...quickLink} key={quickLink.title + index}/>
            )
        })
    }, [quickLinksOneData])
    const QuickLinksTwoJSX = useMemo(() => {
        return quickLinksTwoData.quickLinksData.map((quickLink, index) => {
            return (
                <QuickLinkIndividual {...quickLink} key={quickLink.title + index}/>
            )
        })
    }, [quickLinksTwoData])

    return (
        <>
            <FooterForm />
            <div className={"footer"}>
                <div className={"col-wrapper-24"}>
                    <div className={"d-col-1 hide-on-mb hide-on-t"}></div>
                    <div className={"mb-col-24 t-col-24 d-col-11"}>
                        <div className={"logo-div"}>
                            <picture>
                                { Logo.webp && <source type={"image/webp"} srcSet={Logo.webp} /> }
                                <img
                                    src={Logo.type === "jpg"?Logo.jpg:Logo.png}
                                    alt={Logo.alt?Logo.alt:""}
                                    width={Logo.w}
                                    height={Logo.h}
                                />
                            </picture>
                        </div>
                        <div className={"footer-text"}>
                            <p>As part of fulfilling Education 4.0 requirements AIMS IBS is offering various courses as additional certificate courses so that students are equipped with RIGHTSKILLs. The additional certificate courses offered are highly relevant to Industry and helps students to match industry expected skills.</p>
                            <p>The certificate courses offered are recommended by panel of industry experts and academicians who will mentor our students so that students are aware about value addition that they get from these courses.</p>
                        </div>
                    </div>
                    <div className={"d-col-1 hide-on-mb hide-on-t"}></div>
                    <div className={"mb-col-24 t-col-24 d-col-11"}>
                        <div className={"quick-links-div white"}>
                            <h5 className={"heading"}>Quick Links</h5>
                            <div className={"col-wrapper-24"}>
                                <div className={"mb-col-24 t-col-12 d-col-12"}>
                                    <div className={"quick-links-inner-div"}>
                                        {QuickLinksOneJSX}
                                    </div>
                                </div>
                                <div className={"mb-col-24 t-col-12 d-col-12"}>
                                    <div className={"quick-links-inner-div"}>
                                        {QuickLinksTwoJSX}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"section-2-col-wrapper col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-24 d-col-9"}>
                        <div className={"gmap"}>
                            <div className={"t-align-center"}>
                                <h5 className={"heading"}>AIMS IBS</h5>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.427682697538!2d77.6927045148203!3d12.81561689095834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c4a312594b7%3A0xa70f49468a9ed125!2sAIMS%20IBS%20Business%20School-%20ATMA%20College!5e0!3m2!1sen!2sin!4v1613582146690!5m2!1sen!2sin" className={"gmap-iframe"} frameBorder="" style={{border: 0}} allowFullScreen={false} aria-hidden="false" tabIndex={0} title={"My Car"}></iframe>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-24 t-col-12 d-col-7"}>
                        <div className={"reach-us-div"}>
                            <h5 className={"heading"}>REACH US</h5>
                            <div className={"address"}>
                                <p>AIMS IBS</p>
                                <p>#235, Bommasandra Industrial Area,</p>
                                <p>3rd Phase KIADB, Near Electronics City,</p>
                                <p>Hosur Main Road Bangalore - 560 099,</p>
                                <p>Karnataka, INDIA.</p>
                            </div>
                            <div className={"contact-outer-div"}>
                                <div className={"icon-div"}>
                                    <FontAwesomeIcon icon={faHeadset} className={"icon"}/>
                                </div>
                                <div className={"contact"}>
                                    <p><a href={"tel:+91-98455 26633"}>+91-77958 52804</a></p>
                                    <p><a href={"tel:+91-7847843111"}>+91-78478 43111</a></p>
                                    <p><a href={"tel:+91-98455 26633"}>+91-63640 50143</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-24 t-col-12 d-col-7"}>
                        <div className={"email-outer-div"}>
                            <h5 className={"heading"}>MAIL US</h5>
                            <div className={"email-div"}>
                                <div className={"icon-div"}>
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} className={"icon"}/>
                                </div>
                                <div className={"contact"}>
                                    <p><a href={"mailto:info@aimsibs.com"}>info@aimsibs.com</a></p>
                                    <p><a href={"mailto:director@aimsibs.com"}>director@aimsibs.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className={"social-links"}>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.facebook.com/aimsibs/"}><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.instagram.com/aimsibs/"}><FontAwesomeIcon icon={faInstagram}/></a>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.youtube.com/c/AIMSIBS"}><FontAwesomeIcon icon={faYoutube}/></a>
                            <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/company/aims-ibs/"}><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>
                </div>
                <div className={"copyright"}>
                    <p className={"heading"}>Copyright 2020 AIMS-IBS. All Rights Reserved. Designed and Developed by Digitalably</p>
                </div>
            </div>
        </>
    )
}

export default Footer;