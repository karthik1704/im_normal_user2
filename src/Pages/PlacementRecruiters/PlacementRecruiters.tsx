import { PageLocation, Recruiters, Testimonials } from "../../Common/Components/Components";
import RolesOffered from "./RolesOffered";

import "./PlacementRecruiters.scss";
import { CommonPlacements } from "../../Assets/Assets";
import { Helmet } from "react-helmet-async";

const PlacementRecruiters = () => {
    return (
        <>
            <Helmet>
                <title>Placement Recruiters - AIMS IBS</title>
                <meta name="description" content="Placement Recruiters"/>
            </Helmet>
            <PageLocation img={CommonPlacements} locations={["HOME", "PLACEMENT RECRUITERS"]} title={"PLACEMENT RECRUITERS"}/>
            <div className={"placement-recruiters"}>
                <RolesOffered />
                <div className={"testimonials-container"}>
                    <Testimonials />
                </div>
                <Recruiters />
            </div>
        </>
    )
}

export default PlacementRecruiters;