import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { unhideAllPagePopupForm } from "../../Store/Slices/App/AppSlice";

export const StageOne = () => {
    const dispatch = useDispatch();
    const unhidePopupModal = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(unhideAllPagePopupForm());
    }, [dispatch]);
    return (
        <>
            <div className={"stage-one"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE ONE</h5>
                    <h6 className={"t-align-center"}>Applying To AIMS IBS</h6>
                    <div className="stepper-v-w">
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Candidates can <a href={"#!"} onClick={unhidePopupModal}>Apply Online</a></p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Download the Application form and send the filled application along with necessary documents to AIMS IBS Bangalore</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const StageTwo = () => {
    return (
        <>
            <div className={"stage-two"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE TWO</h5>
                    <h6 className={"t-align-center"}>Assessment</h6>
                    <p className={"t-align-center"}><a target="_blank" rel="noreferrer" href={"https://www.aimsibsonlinetest.com/login"}>Click Here</a> to assess yourself</p>
                </div>
            </div>
        </>
    )
}

export const StageThree = () => {
    return (
        <>
            <div className={"stage-three"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE THREE</h5>
                    <h6 className={"t-align-center"}>Written Test</h6>
                    <p>Successful candidates who pass the AIMS IBS Written Test will be eligible for admissions. Candidates who have appeared for any of the entrance tests of the national or state level, for example, CAT, CMAT, MAT, XAT, KMAT, PGCET, etc are exempted from the AIMS IBS entrance test.</p>
                </div>
            </div>
        </>
    )
}

export const StageFour = () => {
    return (
        <>
            <div className={"stage-four"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE FOUR</h5>
                    <h6 className={"t-align-center"}>Interview</h6>
                    <p>Those candidates who clear the written test or fulfill the test requirements will qualify for Interview. The interviews will be scheduled by the admissions department and the information will be sent to shortlisted students.</p>
                    <p>The selection of the candidate for the program is based on: </p>
                    <div className="stepper-v-w">
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Academic performance</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Test scores</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Interview Performance</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Work experience if any</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Commitment to the course</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Co-curricular achievements and awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const StageFive = () => {
    return (
        <>
            <div className={"stage-five"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE FIVE</h5>
                    <h6 className={"t-align-center"}>Admission & Offer Letter</h6>
                    <p>The selected students will be updated with the result and such students will get Provisional Admission Offer from AIMS IBS</p>
                </div>
            </div>
        </>
    )
}

export const StageSix = () => {
    return (
        <>
            <div className={"stage-six"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE SIX</h5>
                    <h6 className={"t-align-center"}>Admission Confirmation</h6>
                    <p>Those students who will get Provisional Admission offer will get 2 to 3 weeks time to confirm admission by remitting Admission /Registration Charges. Please note the registration fees once paid is nonrefundable and non adjustable under any circumstances.</p>
                </div>
            </div>
        </>
    )
}

export const StageSeven = () => {
    return (
        <>
            <div className={"stage-seven"}>
                <div className={"card-panel"}>
                    <h5 className={"t-align-center"}>STAGE SEVEN</h5>
                    <h6 className={"t-align-center"}>Original Documents to be submitted</h6>
                    <div className="stepper-v-w">
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>10th and 12th Marks sheets</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Graduation Marks sheets (All the Semesters / Years)</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Transfer Certificate (TC)</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Migration Certificate</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Provisional Degree Certificate (PDC)</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Entrance Exam Scorecard (CMAT / CAT / GMAT / IIFT / XAT / MAT / ATMA / KMAT / PGCET)</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>Caste Certificate / Income Certificate (If claiming any exemption)</p>
                        </div>
                        <div className="stepper-v">
                            <div className=""></div>
                            <p>6 Passport Size photographs</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}