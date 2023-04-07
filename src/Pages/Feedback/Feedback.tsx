import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";
import "./Feedback.scss";
import { FeedbackForm } from "../../Common/Components/FeedbackForm/FeedbackForm";

const Feedback = () => {
  return (
    <>
      <Helmet>
        <title>Feedback - AIMS IBS</title>
        <meta name="description" content="Student Feedback" />
      </Helmet>
      <PageLocation
        locations={["HOME",  "Feedback"]}
        title={"STUDENT FEEDBACK"}
      />
      <div className={"feedback"}>
        <div className="col-wrapper-24 ">
            <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
            <div className="card-panel ">
              <FeedbackForm formId={"feedback"} />
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
