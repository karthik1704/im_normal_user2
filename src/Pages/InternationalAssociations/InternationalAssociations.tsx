import { 
    IAEBUSINESSGRADUATEINSTITUTEGRENOBLEFRANCE, IAEBordeauxUniversityFrance,
    SingaporeHumanResourcesInstitute, SingaporeInstituteofManagementSIMGroup,
    SingaporecampusofJamesCookUniversity, StaffordshireUniversityUk,
    UniversityofStirlingUK,

    IndustrialVisits1, IndustrialVisits2, IndustrialVisits3, IndustrialVisits4, IndustrialVisits5,
    IndustrialVisits6, IndustrialVisits7, IndustrialVisits8,

    CommonGlobalExposure,
 } from "../../Assets/Assets";
import { InternationalExchange, PageLocation } from "../../Common/Components/Components";
import { JSXModal, IImage as ICommonImage } from "../../Utils/js/Utils";
import G from 'react-grid-gallery';

import "./InternationalAssociations.scss";
import React, { useCallback, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

const IndustrialVisits = () => {

    const galleryData = useMemo(() => {
        return [
            {src: IndustrialVisits1.jpg, thumbnail: IndustrialVisits1.jpg},
            {src: IndustrialVisits2.jpg, thumbnail: IndustrialVisits2.jpg},
            {src: IndustrialVisits3.jpg, thumbnail: IndustrialVisits3.jpg},
            {src: IndustrialVisits8.jpg, thumbnail: IndustrialVisits8.jpg},
            {src: IndustrialVisits4.jpg, thumbnail: IndustrialVisits4.jpg},
            {src: IndustrialVisits7.jpg, thumbnail: IndustrialVisits7.jpg},
            {src: IndustrialVisits6.jpg, thumbnail: IndustrialVisits6.jpg},
            {src: IndustrialVisits5.jpg, thumbnail: IndustrialVisits5.jpg},
        ] as IImage[];
    }, []);

    const thumbnailStyle = () => {
        return (
            {
                borderRadius: "6px",
                width: "280px",
                cursor: "pointer",
            }
        );
    }

    return (
        <>
            <div className={"industrial-visits"}>
                <div className={"card-panel"}>
                    <div className={"gallery-wrapper"}>
                        <G
                            images={galleryData}
                            enableImageSelection={false}
                            rowHeight={180}
                            thumbnailStyle={thumbnailStyle}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

interface IUnivCard {
    heading: string, shortContent: React.ReactNode, content: React.ReactNode, isImggRight?: boolean,
    img: ICommonImage,
}
const UnivCard = ({content, heading, shortContent, img, isImggRight = false}: IUnivCard) => {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = useCallback(() => {
        setIsShown(!isShown);
    }, [isShown]);
    
    return (
        <>
            <div className={"univ-card"}>
                <div className={"card-panel"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-8 d-col-6"}>
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
                        <div className={"mb-col-24 t-col-16 d-col-18"}>
                            <h6 className={"heading"}>{heading}</h6>
                            <div className={"short-content"}>
                                {shortContent}
                            </div>
                            {
                                content && 
                                    <>
                                        <div className={"modal-trigger-button"}>
                                            <button className={"button bg-deep-orange-600"} onClick={toggleShown}>KNOW MORE</button>
                                        </div>
                                        <JSXModal toggleCallback={toggleShown} isShown={isShown}>
                                            {content}
                                        </JSXModal>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Univ = () => {

    const univCardData = useMemo(() => {
        return [
            {
                img: IAEBordeauxUniversityFrance, isImggRight: false,
                content: (
                    <>
                        <p>AIMS IBS and IAE Bordeaux University, France, are collaborating in developing and delivering joint academic programs, course development on the specificities of the Indian market, credits transfer, faculty exchange, student exchange, and joint research programs.</p>
                        <p>Bordeaux in the Cedex region of France is a global hub of education, high technology industries, wine, and tourism. Bordeaux offers graduate and masters level programs in enterprise management, finance and commerce, international management, cross-cultural management, technology management and a host of business-oriented areas. The articulation with IBMR opens new vistas of cooperation in exchange of information in the field of education, research and training, joint management of doctoral theses, joint scientific publications in fields of common interests. IBMR-IAE Bordeaux partnership offers significant value to Indian as well as European students to enrich knowledge and gain exposure to global management issues in a multi-cultural learning environment.</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>AIMS IBS and IAE Bordeaux University, France, are collaborating in developing and delivering joint academic programs, course development on the specificities of the Indian market, credits transfer, faculty exchange, student exchange, and joint research programs.</p>
                        <p>Bordeaux in the Cedex region of France is a global hub of education, high technology industries, wine, and tourism. Bordeaux offers graduate and masters level programs in enterprise management,</p>
                    </>
                ),
                heading: "IAE Bordeaux University, France",
            },
            {
                img: IAEBUSINESSGRADUATEINSTITUTEGRENOBLEFRANCE, isImggRight: false,
                content: (
                    <>
                        <p>The Grenoble University Graduate Business Institute offers a wide range of programs at the graduate and postgraduate levels. Situated in the picturesque high lands and mountain range, the destination of winter sports, the Grenoble IAE belongs to the national network of Graduate Business Schools of France. IAE Grenoble works in close collaboration with leading firms in French Business Sector and provides an extremely international learning environment.</p>
                        <p>The Grenoble metropolitan area ranks among Europe’s leading technopolis involving a vast range of high technology industries. With close to twenty thousand researchers, Grenoble prides itself as France’s second-largest research center. The metropolitan area is the home of several major international laboratories in technology and scientific research. Many prestigious multinational corporations have been attracted to Grenoble.</p>
                        <p>IBMR and IAE Grenoble cooperate in academic programs, best practice exchange, student exchange, international conferences, sharing of learning and teaching resources, cross-cultural management issues, collaborative programs and are inactive dialogue for increased collaboration for joint program delivery and credit transfer.</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>The Grenoble University Graduate Business Institute offers a wide range of programs at the graduate and postgraduate levels. Situated in the picturesque high lands and mountain range, the destination of winter sports, the Grenoble IAE belongs to the national network of Graduate Business Schools of France. IAE Grenoble works in close collaboration with leading firms in French Business Sector and provides an extremely international learning environment.</p>
                        <p>The Grenoble metropolitan area ranks among Europe’s leading technopolis involving a vast range of high technology industries...</p>
                    </>
                ),
                heading: "IAE Business Graduate Institute Grenoble, France",
            },
            {
                img: UniversityofStirlingUK, isImggRight: false,
                content: (
                    <>
                        <p>The University of Stirling, Scotland has an enviable reputation for the high quality of its learning and teaching, research and scholarship programs. Known world over for its innovation and excellence in business education, in the UK, Stirling has been ranked among the top ten universities in the UK in The Time Higher Awards in 2007 for the quality of student experience. Stirling is a vibrant student body with a sizeable postgraduate community from the UK and overseas. The University has over 9000 students, 2000 of whom are pursuing post-graduate studies.</p>
                        <p>Established in 1985, the Stirling MBA program has retained its position as one of UK’s top MBA programs. In addition to specialist expertise in corporate finance, international marketing, strategic management, accountancy, business and e-commerce, Stirling has an international reputation in retailing management, public service management, business resource management, and HR management.</p>
                        <p>As a medium-size, campus based university with many students living on campus, Stirling has a strong community feel, and most visitors are immediately impressed with the friendly atmosphere at the university. With its world-class scholars and researchers, working in the backdrop of a serene campus of inspiring beauty , Stirling is regarded as one of the finest centers of learning in Europe.</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>The University of Stirling, Scotland has an enviable reputation for the high quality of its learning and teaching, research and scholarship programs. Known world over for its innovation and excellence in business education, in the UK, Stirling has been ranked among the top ten universities in the UK in The Time Higher Awards in 2007 for the quality of student experience. Stirling is a vibrant student body with a sizeable postgraduate community from the UK and overseas. The University has over 9000 students, 2000 of whom are pursuing post-graduate studies.</p>
                    </>
                ),
                heading: "University of Stirling, UK",
            },
            {
                img: StaffordshireUniversityUk, isImggRight: false,
                content: (
                    <>
                        <p>University has a long and proud history of providing high quality, progressive and inclusive higher education for people from across Staffordshire, the region, the UK and the rest of the world. Established in 1992, Staffordshire University has evolved into one of the country’s most dynamic, progressive and forward-thinking learning institutions.</p>
                        <p>Always quick to adapt as student requirements change, we have become renowned for our groundbreaking new courses and first-class learning opportunities. More than 5,000 students are studying for Staffordshire University awards at overseas partner institutions based in Europe and across Asia.</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>University has a long and proud history of providing high quality, progressive and inclusive higher education for people from across Staffordshire, the region, the UK and the rest of the world. Established in 1992, Staffordshire University has evolved into one of the country’s most dynamic, progressive and forward-thinking learning institutions. Always quick to adapt as student requirements change, we have become renowned for our groundbreaking new courses and first-class learning opportunities.</p>
                    </>
                ),
                heading: "Staffordshire University, UK",
            },
            {
                img: SingaporeInstituteofManagementSIMGroup, isImggRight: false,
                content: (
                    <>
                        <p>The Singapore Institute of Management (SIM Group) is a leading private education and lifelong learning institution in Singapore. We offer a diverse range of education pathways and professional training and are known for the rigor and quality of our programs.</p>
                        <p>Founded in 1964 on the initiative of the Economic Development Board to support Singapore’s industrialization, SIM is a professional society with over 36,000 individual and corporate members who have access to a wide range of learning courses, published resources, and networking events.</p>
                        <p>Today, the SIM Group is a diverse and vibrant organization that caters to different segments of learners through partner institutions like IBMR – IBS</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>The Singapore Institute of Management (SIM Group) is a leading private education and lifelong learning institution in Singapore. We offer a diverse range of education pathways and professional training and are known for the rigour and quality of our programmes.</p>
                        <p>Founded in 1964 on the initiative of the Economic Development Board to support Singapore’s industrialisation, SIM is a professional society with over 36,000 individual and corporate members...</p>
                    </>
                ),
                heading: "Singapore Institute of Management (SIM Group)",
            },
            {
                img: SingaporeHumanResourcesInstitute, isImggRight: false,
                content: (
                    <>
                        <p>The Singapore Human Resources Institute (SHRI) is the only not-for-profit professional HR body in Singapore, representing over 3,000 human resource professionals. Founded in 1965, SHRI is committed to promulgating and maintaining high standards of professionalism in human resource management and development.</p>
                        <p>In May 2006, SHRI hosted the 11th World HR Congress and Business-Connect Exposition, which was the biggest international HR event ever to be held in the Asia Pacific and Singapore.</p>
                        <p><strong>Vision</strong><br/>To be the leading HR authority in Singapore to champion human capital excellence</p>
                        <p><strong>Mission</strong><br/>We commit to advocating HR best practices, connect a community of HR professionals and enhance the HR profession</p>
                        <p>IMBR has associated with SHRI in devising several programs to enhance the skill-sets of aspirants.</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>The Singapore Human Resources Institute (SHRI) is the only not-for-profit professional HR body in Singapore, representing over 3,000 human resource professionals. Founded in 1965, SHRI is committed to promulgating and maintaining high standards of professionalism in human resource management and development.</p>
                        <p>In May 2006, SHRI hosted the 11th World HR Congress and Business-Connect Exposition, which was the biggest international HR event ever to be held in the Asia Pacific and Singapore.</p>
                    </>
                ),
                heading: "Singapore Human Resources Institute (SHRI)",
            },
            {
                img: SingaporecampusofJamesCookUniversity, isImggRight: false,
                content: (
                    <>
                        <p>The Singapore campus of James Cook University is fully owned by James Cook University Australia, which is ranked in the top 2%* of universities in the world. James Cook University Australia established its Singapore campus in 2003 as part of its expressed intent of internationalising its activities and offers a suite of university level programs at the Singapore campus covering the areas of Business, Information Technology, Psychology, Education, Accounting, Arts, Aquaculture, Environmental Science, Games Design, Tourism and Hospitality.</p>
                        <p>The university is ranked in the top 2%* of universities in the world and is the leading tropical research university in Australia. JCU Singapore fully adapts the Australian curriculum and all degree certification is awarded from James Cook University Australia.</p>
                        <p>[* The Academic Ranking of World Universities, Shanghai Jiao Tong University, 2017]</p>
                    </>
                ),
                shortContent: (
                    <>
                        <p>The Singapore campus of James Cook University is fully owned by James Cook University Australia, which is ranked in the top 2%* of universities in the world. James Cook University Australia established its Singapore campus in 2003 as part of its expressed intent of internationalising its activities and offers a suite of university level programs at the Singapore campus covering the areas of Business, Information Technology, Psychology, Education, Accounting, Arts, Aquaculture, Environmental Science, Games Design, Tourism and Hospitality.</p>
                    </>
                ),
                heading: "James Cook University (JCU)",
            },
        ] as IUnivCard[];
    }, []);

    const univJSX = useMemo(() => {
        return univCardData.map((u, i)=>{
            return <UnivCard {...u}/>
        })
    }, [univCardData])

    return (
        <>
            <div className={"univ"}>
                <div className={"card-panel"}>
                    <h5 className={"heading t-align-center"}>International Exposure in association with Following Universities</h5>
                    {univJSX}
                </div>
            </div>
        </>
    )
}

interface IImage {
    src: string, thumbnail: string, thumbnailWidth?: string, thumbnailHeight?: string,
}
const InternationalAssociations = () => {

    return (
        <>
            <Helmet>
                <title>International Associations - AIMS IBS</title>
                <meta name="description" content="International Associations"/>
            </Helmet>
            <PageLocation img={CommonGlobalExposure} locations={["HOME", "INTERNATIONAL ASSOCIATIONS"]} title={"INTERNATIONAL ASSOCIATIONS"}/>
            <div className={"international-associations"}>
                <Univ />
                <InternationalExchange />
                <IndustrialVisits />
            </div>
        </>
    )
}

export default InternationalAssociations;