import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";

import { encryptAES, decryptAES, sha512 } from "../../Utils/aes";

import { useDispatch, useSelector } from 'react-redux';
import { hideAllPagePopupForm, unhideAllPagePopupForm } from '../../Store/Slices/App/AppSlice';


import "./Payment.scss";

const Payment = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(hideAllPagePopupForm())
}, [dispatch]);
  return (
    <>
      <Helmet>
        <title> Payment - AIMS IBS</title>
        <meta name="description" content="student Online payment" />
      </Helmet>
      <div className={"pay-online"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
              <h4>Payment</h4>
              
              
              <button onClick={encryptAES}>encrypt check</button>
              <button onClick={decryptAES}>decrypt check</button>
              <button onClick={sha512}>sha 512</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Payment;