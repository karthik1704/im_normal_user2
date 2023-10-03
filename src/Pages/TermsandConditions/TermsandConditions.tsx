import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";
import { Terms } from "../../Assets/Assets";
import "./TermsandConditions.scss";

const TermsandConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - AIMS IBS</title>
        <meta name="description" content="Terms and Conditions" />
      </Helmet>
      <PageLocation
        locations={["HOME", "Terms and Conditions"]}
        title={"Terms and Conditions"}
        img={Terms}
      />
      <div className={"cancellation"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-6"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-13">
            <h4> Terms and Conditions</h4>
            <p>
              The information and services may contain bugs, errors, problems or
              other limitations. We and our affiliated parties have no liability
              whatsoever for your use of any information or service. In
              particular, but not as a limitation thereof, we and our affiliated
              parties are not liable for any indirect, special, incidental or
              consequential damages (including damages for loss of business,
              loss of profits, litigation, or the like), whether based on breach
              of contract, breach of warranty, tort (including negligence),
              product liability or otherwise, even if advised of the possibility
              of such damages. The negation of damages set forth above are
              fundamental elements of the basis of the bargain between us and
              you. This site and the information would not be provided without
              such limitations. No advice or information, whether oral or
              written, obtained by you from us through the site shall create any
              warranty, representation or guarantee not expressly stated in this
              agreement. AIMS IBS Business School is managed by Acliv Foundation Trust and Vidyasaadhana Trust.
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default TermsandConditions;
