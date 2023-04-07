import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
    AdvanceExcel, AllianceFrancaise, CommonAboutUs, ConfederationOfIndianIndustries, DigitalMarketing, IBM_SPSS, IIMM,
    NationalHumanResourceDevelopmentNetwork, NISMModules, ProjectManagement, SAPModule,
 } from "../../Assets/Assets";
import { GlobalAffiliations, PageLocation } from "../../Common/Components/Components";
import { BoxedCards, IBoxedCards } from "../../Utils/js/Utils";
import "./IndustryKnowledgePartners.scss";

const IndustryKnowledgePartners = () => {
    const cardData = useMemo(() => {
        return {
            cards: [
                {
                    img: DigitalMarketing,
                    divClassName: "DigitalMarketing",
                    content: "Digital Marketing",
                },
                {
                    img: AdvanceExcel,
                    divClassName: "AdvanceExcel",
                    content: "Advance Excel",
                },
                {
                    img: SAPModule,
                    divClassName: "SAPModule",
                    content: "SAP Modules",
                },
                {
                    img: IBM_SPSS,
                    divClassName: "IBM_SPSS",
                    content: "IBM - SPSS",
                },
                {
                    img: ProjectManagement,
                    divClassName: "ProjectManagement",
                    content: "Project Management",
                },
                {
                    img: NationalHumanResourceDevelopmentNetwork,
                    divClassName: "NationalHumanResourceDevelopmentNetwork",
                    content: "National Human Resource Development Network",
                },
                {
                    img: NISMModules,
                    divClassName: "NISMModules",
                    content: "NISM/NCFM Modules",
                },
                {
                    img: AllianceFrancaise,
                    divClassName: "AllianceFrancaise",
                    content: "Alliance Francaise",
                },
                {
                    img: IIMM,
                    divClassName: "IIMM",
                    content: "Indian Institute of Materials Management (IIMM)",
                },
                {
                    img: ConfederationOfIndianIndustries,
                    divClassName: "ConfederationOfIndianIndustries",
                    content: "Confederation of Indian Industries",
                },
            ],
        } as IBoxedCards;
    }, []);

    return (
        <>
            <Helmet>
                <title>Industry Knowledge Partners - AIMS IBS</title>
                <meta name="description" content="Industry Knowledge Partners"/>
            </Helmet>
            <PageLocation img={CommonAboutUs} locations={["HOME", "INDUSTRY/KNOWLEDGE PARTNERS"]} title={"INDUSTRY/KNOWLEDGE PARTNERS"}/>
            <div className={"industry-knowledge-partners"}>
                <BoxedCards {...cardData}/>
                {/* <div className={"partners-container"}>
                    <Partners />
                </div> */}
                <GlobalAffiliations />
            </div>
        </>
    )
}

export default IndustryKnowledgePartners;
