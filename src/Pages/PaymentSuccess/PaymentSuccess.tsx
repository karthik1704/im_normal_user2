import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageLocation } from "../../Common/Components/Components";

import { encryptAES, decryptAES, sha512 } from "../../Utils/aes";
import { useQuery } from "../../Common/Hooks/Hooks";

import { Invoice } from "../../Assets/Assets";

import { useDispatch, useSelector } from 'react-redux';
import { hideAllPagePopupForm, unhideAllPagePopupForm } from '../../Store/Slices/App/AppSlice';


import "./PaymentSuccess.scss";


type Idata = {
  id: string | null
  message?:string | null
} | null


const PaymentSuccess = () => {
 const  query = useQuery();

 
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
        <title> Payment Success - AIMS IBS</title>
        <meta name="description" content="student Online payment" />
      </Helmet>
      <div className={"payment-success"}>
        <div className="col-wrapper-24 ">
          <div className="hide-on-mb t-col-6 l-col-8 xl-col-8"></div>
          <div className="mb-col-22 t-col-11 l-col-11 xl-col-8">
            <div className="card">
              <img src={Invoice} alt="Payment success" height={"100px"} width={"100px"}/>
              <h4>Payment Success</h4>
              <p>We have recived your payment </p>
              <p>Transaction Id: {data?.id} </p>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default PaymentSuccess;