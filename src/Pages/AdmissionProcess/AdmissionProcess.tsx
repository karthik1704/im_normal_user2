import { Helmet } from "react-helmet-async";
import { CommonAdmissions } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import "./AdmissionProcess.scss";
import { StageOne, StageTwo, StageThree, StageFour, StageFive, StageSix, StageSeven } from "./Stages";

const AdmissionProcess = () => {
    return (
        <>
            <Helmet>
                <title>Admission Process - AIMS IBS</title>
                <meta name="description" content="Admission Process"/>
            </Helmet>
            <PageLocation img={CommonAdmissions} locations={["HOME", "ADMISSION PROCESS"]} title={"ADMISSION PROCESS"}/>
            <div className={"admission-process"}>
                <div className={"criteria"}>
                    <div className={"card-panel"}>
                        <h5 className={"t-align-center"}>ELIGIBILITY</h5>
                        <p>Graduates with 50% score (3 years program) from any discipline are eligible to apply.</p>
                        <p>Students awaiting final year/semester results can also apply. (However, such students will be given provisional admission subject to the submission of their final marks sheet).</p>
                    </div>
                </div>

                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-24 d-col-12"}>
                        <StageOne />
                    </div>
                    <div className={"mb-col-24 t-col-24 d-col-12"}>
                        <StageTwo />
                        <StageThree />
                    </div>
                    <div className={"mb-col-24 t-col-24 d-col-12"}>
                        <StageFive />
                        <StageSix />
                    </div>
                    <div className={"mb-col-24 t-col-24 d-col-12"}>
                        <StageFour />
                    </div>
                    <div className={"mb-col-24 t-col-24 d-col-24"}>
                        <StageSeven />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdmissionProcess;