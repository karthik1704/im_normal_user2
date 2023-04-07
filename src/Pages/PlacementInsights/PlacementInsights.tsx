import { useMemo } from 'react';
import { IInsightsChart, InsightsChart, PageLocation } from '../../Common/Components/Components';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

import "./PlacementInsights.scss";
import { CommonPlacements } from '../../Assets/Assets';
import { Helmet } from 'react-helmet-async';

const PlacementInsights = () => {
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
            heading: "MBA SPECIALIZATION SEGREGATION",
        } as IInsightsChart;
    }, []);

    const graduationData = useMemo(() => {
        return {
            chartData: {
                data: [
                    { "id": "Bcom", "label": "Bcom", "value": 52.5, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BE or Btech", "label": "BE or Btech", "value": 7.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BBM or BBA", "label": "BBM or BBA", "value": 12.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Bsc", "label": "Bsc", "value": 8.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "BA", "label": "BA", "value": 17.8, "color": "hsl(267, 70%, 50%)", },
                ],
            },
            heading: "GRADUATION SPECIALIZATION SEGREGATION",
        } as IInsightsChart;
    }, []);

    const stateWiseData = useMemo(() => {
        return {
            chartData: {
                data: [
                    { "id": "Andhra Pradesh", "label": "Andhra Pradesh", "value": 18.6, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Assam", "label": "Assam", "value": 2, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Chhattisgarh", "label": "Chhattisgarh", "value": 2.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Gujarat", "label": "Gujarat", "value": 2.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Himachal Pradesh", "label": "Himachal Pradesh", "value": 1, "color": "hsl(267, 70%, 50%)", },
                    
                    { "id": "Karnataka", "label": "Karnataka", "value": 35.3, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Kashmir", "label": "Kashmir", "value": 1, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Kerala", "label": "Kerala", "value": 4.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Madhya Pradesh", "label": "Madhya Pradesh", "value": 4.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Maharashtra", "label": "Maharashtra", "value": 2.9, "color": "hsl(267, 70%, 50%)", },

                    { "id": "Rajasthan", "label": "Rajasthan", "value": 2.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Tamil Nadu", "label": "Tamil Nadu", "value": 4.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Telangana", "label": "Telangana", "value": 9.8, "color": "hsl(267, 70%, 50%)", },
                    { "id": "Uttar Pradesh", "label": "Uttar Pradesh", "value": 2.9, "color": "hsl(267, 70%, 50%)", },
                    { "id": "West Bengal", "label": "West Bengal", "value": 2.9, "color": "hsl(267, 70%, 50%)", },

                ],
            },
            heading: "GRADUATION SPECIALIZATION SEGREGATION",
            containerClassName: "GRADUATION"
        } as IInsightsChart;
    }, []);

    return (
        <>
            <Helmet>
                <title>Placement Insights - AIMS IBS</title>
                <meta name="description" content="Placement Insights"/>
            </Helmet>
            <PageLocation img={CommonPlacements} locations={["HOME", "Placement Insights"]} title={"Placement Insights"}/>
            <div className={"placement-insights"}>
                <SectionOne />
                <SectionTwo />
                <div className={"col-wrapper-12"}>
                    <div className={"mb-col-12 t-col-6 d-col-6"}>
                        <div className={""} >
                            <InsightsChart {...mbaData}/>
                        </div>
                    </div>
                    <div className={"mb-col-12 t-col-6 d-col-6"}>
                        <div className={""} >
                            <InsightsChart {...graduationData}/>
                        </div>
                    </div>
                    <div className={"mb-col-12 t-col-12 d-col-12"}>
                        <div className={""} >
                            <InsightsChart {...stateWiseData}/>
                        </div>
                    </div>
                </div>
                <SectionThree />
            </div>
        </>
    )
}

export default PlacementInsights;