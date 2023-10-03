import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { PageLocation } from "../../Common/Components/Components";

import { encryptAES, decryptAES, sha512 } from "../../Utils/aes";
import { useQuery } from "../../Common/Hooks/Hooks";

import { useDispatch, useSelector } from 'react-redux';
import { hideAllPagePopupForm, unhideAllPagePopupForm } from '../../Store/Slices/App/AppSlice';
import "./PaymentFailure.scss";


const PaymentFailure = () => {
  const query = useQuery();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(hideAllPagePopupForm())
}, [dispatch]);

  return (
    <>
      <Helmet>
        <title> Payment Failure - AIMS IBS</title>
        <meta name="description" content="student Online payment" />
      </Helmet>
      <div className={"pay-online"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
              <h4>Payment Failure</h4>
              <p>Reason: </p>
              <p>Transaction Id: xxxxxxxxxx </p>

              <p>If money deducted, Please wait for 7 days.</p>
              <p>If money not credited in 7 days, please contact your bank for further enquiry</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default PaymentFailure;