import { Helmet } from "react-helmet-async";
import { CommonAboutUs } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import "./OurBSchool.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import VisionAndMission from "./VisionAndMission";

const Objective = () => {
    return (
        <>
            <div className={"objective"}>
                <div className={"card-panel"}>
                    <h3 className={"heading"}>Objective</h3>

                    <div className={"content"}>
                        <p>To bridge the gap between University Curriculum and the latest Industry practices and ensure application of concepts to practical situations.</p>
                        <p>To enable students to acquire contemporary management ideas and beliefs to excel in their respective streams.</p>
                        <p>To provide the AIMS IBS competitive edge to make students professionals compete in the International markets.</p>
                        <p>To inculcate a comprehensive learning experience that is designed to educate students for global business practices.</p>
                        <p>To complement the student, faculty and Industry network and facilitate better learning.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const OurBSchool = () => {
    return (
        <>
            <Helmet>
                <title>Our B-School - AIMS IBS</title>
                <meta name="description" content="Our B-School"/>
            </Helmet>
            <PageLocation img={CommonAboutUs} locations={["HOME", "OUR B SCHOOL"]} title={"OUR B SCHOOL"}/>
            <div className={"our-b-school"}>
                <div>
                    <SectionOne />
                </div>
                <div>
                    <SectionTwo />
                </div>
                <div>
                    <VisionAndMission />
                </div>
                <div>
                    <Objective />
                </div>
            </div>
        </>
    )
}

export default OurBSchool;