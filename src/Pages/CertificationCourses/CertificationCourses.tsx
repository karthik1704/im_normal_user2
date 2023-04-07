import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { 
    JIEMAssessmentTraining, BusinessAnalytics, SAPBusinessIntelligence, CapitalMarket, CertifiedHRProfessional,
    DigitalMarketing, Excel, IIMMLogisticsSupplyChain, InvestmentBanking, ProjectMgmt, RelianceMoney,
    SAPFinance, SAPHR, SAPHana, SAPMaterialsManagement, SAPSales, SAPSupply, SixSigma, ToastMaster, Wahwani, CommonPrograms,
 } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { BoxedCards, IBoxedCards } from "../../Utils/js/Utils";

import "./CertificationCourses.scss";

const CertificationCourses = () => {
    const cardData = useMemo(() => {
        return {
            cards: [
                {
                    img: SAPSales, divClassName: "SAPSales",
                    content: "SAP R 3", contentTwo: "Sales & Distribution",
                },
                {
                    img: SAPHR, divClassName: "SAPHR",
                    content: "SAP R 3", contentTwo: "HR",
                },
                {
                    img: SAPFinance, divClassName: "SAPFinance",
                    content: "SAP R 3", contentTwo: "Finance",
                },
                {
                    img: SAPHana, divClassName: "SAPHana",
                    content: "SAP R 3", contentTwo: "HANA",
                },
                {
                    img: SAPBusinessIntelligence, divClassName: "SAPSales",
                    content: "SAP R 3", contentTwo: "Business Intelligence",
                },
                /** ------ */
                {
                    img: SAPMaterialsManagement, divClassName: "SAPMaterialsManagement",
                    content: "SAP R 3", contentTwo: "Materials Management",
                },
                {
                    img: SAPSupply, divClassName: "SAPSupply",
                    content: "SAP R 3", contentTwo: "Supply Chain Management",
                },
                {
                    img: RelianceMoney, divClassName: "RelianceMoney",
                    content: "Reliance Money", contentTwo: "Equity Dealer",
                },
                {
                    img: JIEMAssessmentTraining, divClassName: "JIEM",
                    content: "JIEM", contentTwo: "Assessment & Training",
                },
                {
                    img: Excel, divClassName: "Excel",
                    content: "Advanced", contentTwo: "MS Excel",
                },
                /** ------ */
                {
                    img: IIMMLogisticsSupplyChain, divClassName: "IIMMLogisticsSupplyChain",
                    content: "Logistics & Supply", contentTwo: "Chain by IIMM",
                },
                {
                    img: ToastMaster, divClassName: "ToastMaster",
                    content: "Toast Master", contentTwo: "International Training",
                },
                {
                    img: DigitalMarketing, divClassName: "DigitalMarketing",
                    content: "Digital Marketing",
                },
                {
                    img: BusinessAnalytics, divClassName: "BusinessAnalytics",
                    content: "Business Analytics",
                },
                {
                    img: InvestmentBanking, divClassName: "InvestmentBanking",
                    content: "Investment Banking",
                },
                /** ------ */
                {
                    img: CapitalMarket, divClassName: "CapitalMarket",
                    content: "Capital Market",
                },
                {
                    img: ProjectMgmt, divClassName: "ProjectMgmt",
                    content: "Project Management",
                },
                {
                    img: CertifiedHRProfessional, divClassName: "CertifiedHRProfessional",
                    content: "Certified", contentTwo: "HR Professional",
                },
                {
                    img: SixSigma, divClassName: "SixSigma",
                    content: "Six Sigma",
                },
                {
                    img: Wahwani, divClassName: "Wahwani",
                    content: "Certification Course in B Plan", contentTwo: "& Entrepreneurship",
                },
            ],
        } as IBoxedCards;
    }, []);

    return (
        <>
            <Helmet>
                <title>Certification Courses - AIMS IBS</title>
                <meta name="description" content="Certification Courses"/>
            </Helmet>
            <PageLocation img={CommonPrograms} locations={["HOME", "CERTIFICATION COURSES"]} title={"CERTIFICATION COURSES"}/>
            <div className={"certification-courses"}>
                <BoxedCards {...cardData}/>
            </div>
        </>
    )
}

export default CertificationCourses;