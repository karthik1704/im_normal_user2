import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { CommonInternshipMotors } from "../../Assets/Assets";
import { IInsightsChart, InsightsChart, PageLocation } from "../../Common/Components/Components";
import "./InternshipInsights.scss";
import InternshipStatistics from "./InternshipStatistics";

const InternshipInsights = () => {

    const mbaData = useMemo(() => {
        return {
            chartData: {
                data: [
                    { "id": "Marketing", "label": "Marketing", "value": 28.8, "color": "hsl(267, 70%, 50%)", },
                    { "id": "IT", "label": "IT", "value": 11.5, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Finance", "label": "Finance", "value": 29.8, "color": "hsl(267, 70%, 50%)", },
                    { "id": "SCM", "label": "SCM", "value": 14.4, "color": "hsl(267, 70%, 50%)", },
                    { "id": "HR", "label": "HR", "value": 15.4, "color": "hsl(267, 70%, 50%)", },
                ],
            },
            heading: "MBA Specialization Segregation",
        } as IInsightsChart;
    }, []);

    const specialisationBreakupData = useMemo(() => {
        return {
            chartData: {
                data: [
                    { "id": "Finance", "label": "Finance", "value": 45, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Retail & Supply Chain Management", "label": "Retail & Supply Chain Management", "value": 3, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Marketing", "label": "Marketing", "value": 24, "color": "hsl(267, 70%, 50%)", },
                    { "id": "International Business", "label": "International Business", "value": 1, "color": "hsl(267, 70%, 50%)", },
                    { "id": "HRM", "label": "HRM", "value": 26, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Information Systems", "label": "Information Systems", "value": 1, "color": "hsl(267, 70%, 50%)", },
                ],
            },
            heading: "Specialisation Breakup",
        } as IInsightsChart;
    }, []);

    const graduationBreakupData = useMemo(() => {
        return {
            chartData: {
                data: [
                    { "id": "BBM/BBA", "label": "BBM/BBA", "value": 20, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BE/Btech", "label": "BE/Btech", "value": 14, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BSc", "label": "BSc", "value": 20, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BCA", "label": "BCA", "value": 3, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BA", "label": "BA", "value": 3, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Bcom", "label": "Bcom", "value": 40, "color": "hsl(267, 70%, 50%)", },
                ],
            },
            heading: "Graduation Breakup",
        } as IInsightsChart;
    }, []);

    const InternshipsIndustryCompositionData = useMemo(() => {
        return {
            chartData: {
                data: [
                    { "id": "Retail", "label": "Retail", "value": 15, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Manufacturing", "label": "Manufacturing", "value": 9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Financial Services", "label": "Financial Services", "value": 13, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Insurance", "label": "Insurance", "value": 10, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Telecom", "label": "Telecom", "value": 13, "color": "hsl(267, 70%, 50%)", },
                    { "id": "IT", "label": "IT", "value": 7, "color": "hsl(267, 70%, 50%)", },
                    { "id": "eCommerce", "label": "eCommerce", "value": 4, "color": "hsl(267, 70%, 50%)", },
                    { "id": "FMCG", "label": "FMCG", "value": 4, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Logistics", "label": "Logistics", "value": 10, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Reaserch", "label": "Reaserch", "value": 2, "color": "hsl(267, 70%, 50%)", },
                    { "id": "HR & Consulting Services", "label": "HR & Consulting Services", "value": 9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Digital Marketing & Training", "label": "Digital Marketing & Training", "value": 4, "color": "hsl(267, 70%, 50%)", },
                ],
            },
            heading: "Graduation Breakup",
        } as IInsightsChart;
    }, []);
    
    return (
        <>
            <Helmet>
                <title>Internship Insights - AIMS IBS</title>
                <meta name="description" content="Internship Insights"/>
            </Helmet>
            <PageLocation img={CommonInternshipMotors} locations={["HOME", "INTERNSHIP INSIGHTS"]} title={"INTERNSHIP INSIGHTS"}/>
            <div className={"internship-insights"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>AIMS IBS history of strong relationships with leading business organizations</h5>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-12 d-col-12"}>
                            <div className={"card-panel"}>
                                <h6 className={"t-align-center"}>Batch Profile</h6>
                                <p>AIMS IBS has a history of strong relationships with leading business organisations. Today our corporate network is with more than 4300 companies spread across India & Abroad. Our alumni are placed in best of Indian and global corporate scripting their own success stories. We are proud about our 8000 plus alumni who have succeeded in their career in various companies in India and abroad.</p>
                            </div>
                        </div>
                        <div className={"mb-col-24 t-col-12 d-col-12"}>
                            <div className={"card-panel"}>
                                <h6 className={"t-align-center"}>Pre Internship Training</h6>
                                <p>AIMS IBS offers a rigorous and focussed pre-internship training program. The programme begins with a special practical session on Industry analysis wherein the group of students will do a minor project on Industry Analysis. This equips the students with in-depth knowledge about the different sectors in Indian economy. Following this, a session with industry Experts will help the students zero in on choosing the right sector for the internship.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <InternshipStatistics />
                <div className={"col-wrapper-12"}>
                    <div className={"mb-col-12 t-col-6 d-col-6"}>
                        <div className={""} >
                            <InsightsChart {...mbaData}/>
                        </div>
                    </div>
                    <div className={"mb-col-12 t-col-6 d-col-6"}>
                        <div className={""} >
                            <InsightsChart {...specialisationBreakupData}/>
                        </div>
                    </div>
                    <div className={"mb-col-12 t-col-6 d-col-6"}>
                        <div className={""} >
                            <InsightsChart {...graduationBreakupData}/>
                        </div>
                    </div>
                    <div className={"mb-col-12 t-col-6 d-col-6"}>
                        <div className={""} >
                            <InsightsChart {...InternshipsIndustryCompositionData}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InternshipInsights;