import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";
import "./CancellationandRefundPolicy.scss";

const CancellationandRefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation and Refund Policy - AIMS IBS</title>
        <meta name="description" content="Cancellation and Refund Policy" />
      </Helmet>
      <PageLocation
        locations={["HOME", "Cancellation and Refund Policy"]}
        title={"Cancellation and Refund Policy"}
      />
      <div className={"cancellation"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-6"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-13">
            <h4> Cancellation & Refund Policy:</h4>
            <p>
              {" "}
              Cancellation and Refund of tuition fee UG and PG Programs DATE OF
              APPLICATION FOR CANCELLATION PERCENTAGE OF REFUND FROM FIRST YEAR
              FULL FEES{" "}
            </p>
            <ul>
              <li className="mb-04">
                Tution fee is not refundable after student gets the registration
                number from the University.
              </li>
              <li className="mb-04">
                {" "}
                In case the admission of the student is cancelled on account of
                disciplinary action or violation of Anti Ragging Regulations, or
                breach of code of conduct, or any other Rules and Regulations of
                the institute or any other regulatory body, fees is not
                refundable.
              </li>
              <li className="mb-04">
                Examinations Fees / Application Form Fees are non refundable.
              </li>
              <li className="mb-04">
                In other cases which is not covered above, the decision will be
                taken by the board. 6. Under the circumstance of cancellation
                because of any disciplinary action, no refund will be paid
                against any Academic and/ or Hostel and/ or Other Fees.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationandRefundPolicy;
