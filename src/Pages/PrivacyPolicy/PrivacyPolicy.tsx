import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - AIMS IBS</title>
        <meta name="description" content="Privacy Policy" />
      </Helmet>
      <PageLocation
        locations={["HOME", "Privacy Policy"]}
        title={"Privacy Policy"}
      />
      <div className={"cancellation"}>
      <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-6"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-13">
        <h5>Privacy Policy</h5>
        <p>
          We commit to respect your privacy. We do not share, sell, or transfer
          any of your personal information to a third party.
        </p>
        <p>
          This Privacy Statement applies to the user information that we gather
          when you visit AIMSIBS. This page contains information and the
          description of how this information is processed and protected.
        </p>
        <h5>Browsing Information</h5>
        <p>
          We track browsing pattern of visitors to understand effectiveness of
          our site.{" "}
        </p>
        <p>
          Personal information is not recorded. The information asked on the
          website Data like your Name, Email ID, and/or Phone Number is used to
          communicate effectively with our visitors. AIMSIBS will never sell,
          share, or disclose the information provided on its website.
        </p>{" "}
        </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
