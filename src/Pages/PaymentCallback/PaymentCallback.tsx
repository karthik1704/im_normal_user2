import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";

import { encryptAES, decryptAES, sha512 } from "../../Utils/aes";
import { useQuery } from "../../Common/Hooks/Hooks";

import { useDispatch, useSelector } from 'react-redux';
import { hideAllPagePopupForm, unhideAllPagePopupForm } from '../../Store/Slices/App/AppSlice';



import "./PaymentCallback.scss";
import LoadingScreenUI from "../../LoadingScreenUI/LoadingScreenUI";

interface ResponseParams {
  ResponseCode: String
}

const PaymentCallback = () => {
  const query = useQuery()

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(hideAllPagePopupForm())
}, [dispatch]);


  useEffect(() => {
    console.log(query)
    // if (query?.ResponseCode === 'E000'){

    // } 
    
  }, [query])
  
  return (
    <>
      <Helmet>
        <title> Payment Processing - AIMS IBS</title>
        <meta name="description" content="student Online payment" />
      </Helmet>
      <div className={"pay-online"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
              <LoadingScreenUI name="PAYMENTLOADING" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default PaymentCallback;