import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { PageLocation } from "../../Common/Components/Components";

import { encryptAES, decryptAES, sha512 } from "../../Utils/aes";
import { useQuery } from "../../Common/Hooks/Hooks";

import { useDispatch, useSelector } from 'react-redux';
import { hideAllPagePopupForm, unhideAllPagePopupForm } from '../../Store/Slices/App/AppSlice';
import "./PaymentFailure.scss";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

type Idata = {
  id: string | null
  message?:string | null
} | null

const PaymentFailure = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const [data, setData] = useState<Idata>(null)


  useEffect(() => {
    dispatch(hideAllPagePopupForm())
}, [dispatch]);

  useEffect(()=>{
    const d = query.get('d');
  
    if(d){
       const  decode  =atob(d)
       const data = JSON.parse(decode)
      setData({
        id: data.id ? data.id : null,
        message: data?.message
        
      })
    }
  },[query])

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
              <p>Reason: {data?.message} </p>
              {data?.id && data.id !=='null' && <p>Transaction Id: <b>{data?.id }</b> </p>}

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