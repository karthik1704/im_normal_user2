import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { PageLocation } from "../../Common/Components/Components";
import "./Grievance.scss";
import { GrievanceForm } from "../../Common/Components/GrievanceForm/GrievanceForm";
import { resetPostState,  } from "../../Store/Slices/GrievanceForm/GrievanceFormSlice";

const Grievance = () => {
  const dispatch = useDispatch();

  useEffect(()=>{dispatch(resetPostState())},[dispatch])

  return (
    <>
      <Helmet>
        <title>Grievance - AIMS IBS</title>
        <meta name="description" content="Student grievance" />
      </Helmet>
      <PageLocation
        locations={["HOME",  "GRIEVANCE"]}
        title={"STUDENT GRIEVANCE"}
      />
      <div className={"grievance"}>
        <div className="col-wrapper-24 ">
            <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
            <div className="card-panel ">
              <GrievanceForm formId={"grievance"} />
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Grievance;
