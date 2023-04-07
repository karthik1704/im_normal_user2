import { Helmet } from "react-helmet-async";
import { CommonInternshipMotors } from "../../Assets/Assets";
import { PageLocation, Recruiters, Testimonials } from "../../Common/Components/Components";
import "./InternshipRecruiters.scss";

const InternshipRecruiters = () => {
    return (
        <>
            <Helmet>
                <title>Internship Recruiters - AIMS IBS</title>
                <meta name="description" content="Internship Recruiters"/>
            </Helmet>
            <PageLocation img={CommonInternshipMotors} locations={["HOME", "INTERNSHIP RECRUITERS"]} title={"INTERNSHIP RECRUITERS"}/>
            <div className={"internship-recruiters"}>
                <div className={"recruiters-wrapper"}>
                    <Recruiters />
                </div>
                <div className={"testimonials-wrapper"}>
                    <h4 className={"heading"}>Alumni Testimnials</h4>
                    <Testimonials />
                </div>
            </div>
        </>
    )
}

export default InternshipRecruiters;