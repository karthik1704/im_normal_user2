import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";
import { PayOnlineForm } from "../../Common/Components/PayOnlineForm/PayOnlineForm";
import "./PayOnline.scss";

const PayOnline = () => {
    return (
        <>
            <Helmet>
                <title>Pay Online - AIMS IBS</title>
                <meta name="description" content="student Online payment"/>
            </Helmet>
            <PageLocation locations={["HOME", "PAY ONLINE"]} title={"PAY ONLINE"}/>
            <div className={"pay-online"}>
            <div className="col-wrapper-24 ">
            <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
            
              <PayOnlineForm formId={"pay-online"} />
            
            </div>
           
          </div>
        </div>
            </div>
        </>
    )
}

export default PayOnline;