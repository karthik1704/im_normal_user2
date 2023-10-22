import "./Payment.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


import { useDispatch } from "react-redux";
import {
  hideAllPagePopupForm,
  unhideAllPagePopupForm,
} from "../../Store/Slices/App/AppSlice";

import { PayOnlineForm } from "../../Common/Components/PayOnlineForm/PayOnlineForm";

import { CommonPayment } from "../../Assets/Assets";
import {PageLocation} from "../../Common/Components/Components";

const Payment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideAllPagePopupForm());
  }, [dispatch]);

  
  return (
    <>
      <Helmet>
        <title> Payment - AIMS IBS</title>
        <meta name="description" content="student Online payment" />
      </Helmet>
      <PageLocation  locations={["HOME", "Payment"]} title={"Online Payment"} img={CommonPayment}/>
      <div className={"pay-online"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
              <h4>Payment</h4>

              <div className="card">
                <PayOnlineForm formId={"pay-online"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
