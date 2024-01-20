import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./PayOnlineForm.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import ShortUniqueId from "short-unique-id";
import { encryptAES } from "../../../Utils/aes";

const ErrorDiv = ({
  errors,
  divClassName,
}: {
  errors: string[];
  divClassName?: string;
}) => {
  return (
    <>
      {errors.length ? (
        <div className={`card-panel error-div ${divClassName} bg-red-a700`}>
          {errors.map((errorMsg, index) => {
            return (
              <p key={index} className="t-align-center">
                {errorMsg}
              </p>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

enum FeeTypeEnum {
  AdmissionFee = "AdmissionFee",
  TuitionFee = "TuitionFee",
  LatePaymentFee = "LatePaymentFee",
  LibraryFee = "LibraryFee",
}

const schema = yup
  .object({
    studentName: yup.string().required(),
    rollNo: yup.string(),
    course: yup.string().required(),
    batch: yup.string().required(),
    type: yup
      .mixed<FeeTypeEnum>()
      .oneOf(Object.values(FeeTypeEnum), "Please select fee type")
      .required(),
    amount: yup.number().typeError("Enter valid amount").required(),
    phoneNumber: yup
      .number()
      .typeError("Enter Valid Phone Number")
      .min(10)
      .required(),
    upiVPA: yup.string(),
    remarks: yup.string(),
  })
  .required();

type Inputs = {
  studentName: string;
  rollNo?: string;
  course: string;
  batch: string;
  type: FeeTypeEnum;
  amount: number;
  phoneNumber: number;
  upiVPA?: string;
  remarks?: string;
};

export interface IPayOnlineForm {
  setFilledAtLeastOnce?: React.Dispatch<React.SetStateAction<boolean>>; // used by popup form
  formId: string;
  closeSuccessMsgCallback?: () => void;
}
export const PayOnlineForm = ({
  formId,
  closeSuccessMsgCallback,
}: IPayOnlineForm) => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { isSubmitted, errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      studentName: "",
      rollNo: "",
      batch: "",
      course: "",
      upiVPA: "",
      remarks: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    let admissionFee = 0;
    let tutitionFee = 0;
    let libraryFee = 0;
    let lateFeePayment = 0;
    let PGAmount = 0;

    switch (data.type) {
      case "AdmissionFee":
        admissionFee = data.amount;
        break;
      case "TuitionFee":
        tutitionFee = data.amount;
        break;
      case "LibraryFee":
        libraryFee = data.amount;
        break;
      case "LatePaymentFee":
        lateFeePayment = data.amount;
        break;
      default:
        PGAmount = data.amount;
    }

    const { randomUUID } = new ShortUniqueId({ length: 10 });
    const referenceId = randomUUID();
    const merchantId = 378350;
    const subMerchantId = "25";
    let { studentName, rollNo, course, batch, phoneNumber, upiVPA, remarks } =
      data;

    if (rollNo === "") rollNo = "x";
    if (upiVPA === "") upiVPA = "x";
    if (remarks === "") remarks = "x";

    const manatoryFields = `${referenceId}|${subMerchantId}|${PGAmount}|${studentName}|${course}|${batch}|${upiVPA}|${phoneNumber}`;
    const optionFields = `${rollNo}|${admissionFee}|${tutitionFee}|${lateFeePayment}|${libraryFee}|${remarks}`;
    const transactionAmount = data.amount.toString();

    const url = `https://eazypay.icicibank.com/EazyPG?merchantid=${merchantId}&mandatory fields=${await encryptAES(
      manatoryFields
    )}&optional fields=${await encryptAES(
      optionFields
    )}&returnurl=${await encryptAES(
      "https://normal-user-api.aimsibs.com/payment/verify/"
    )}&Reference No=${await encryptAES(
      referenceId
    )}&submerchantid=${await encryptAES(
      subMerchantId
    )}&transaction amount=${await encryptAES(
      transactionAmount
    )}&paymode=${await encryptAES("9")}`;
    console.log(url);
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitted, reset]);

  return (
    <>
      <form className={"common-form"} onSubmit={handleSubmit(onSubmit)}>
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-student_name`}
            className="border-black "
            type="text"
            placeholder=" "
            {...register("studentName", { required: true })}
          />
          <label htmlFor={`${formId}-form-student_name`}>Student Name *</label>
          <i className="material-icons">perm_identity</i>
          {errors.studentName && (
            <p role="alert" className="bg-red-a700">
              {errors.studentName.message}
            </p>
          )}
        </div>

        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-rollNo`}
            className="border-black "
            type="text"
            placeholder=" "
            {...register("rollNo", { required: false })}
          />
          <label htmlFor={`${formId}-form-name`}>Roll Number</label>
          <i className="material-icons">perm_identity</i>
          {errors.rollNo && (
            <p role="alert" className="bg-red-a700">
              {errors.rollNo.message}
            </p>
          )}
        </div>

        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-course`}
            className="border-black "
            type="text"
            placeholder=" "
            {...register("course", { required: true })}
          />
          <label htmlFor={`${formId}-form-contact`}>Course *</label>
          <i className="material-icons">batch_prediction</i>
          {errors.course && (
            <p role="alert" className="bg-red-a700">
              {errors.course.message}
            </p>
          )}
        </div>

        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-batch`}
            className="border-black "
            type="text"
            placeholder=" "
            {...register("batch", { required: true })}
          />
          <label htmlFor={`${formId}-form-batch`}>Batch Year *</label>
          <i className="material-icons">batch_prediction</i>
          {errors.batch && (
            <p role="alert" className="bg-red-a700">
              {errors.batch.message}
            </p>
          )}
        </div>

        <div
          className="input-div icon footer-form-input"
        >
          <select
            id={`${formId}-form-type`}
            className="border-black "
            title="type"
            {...register("type", { required: true })}
          >
            <option value={""}>--Select Fee Type--</option>
            <option value={"AdmissionFee"}>Admission Fee</option>
            <option value={"TuitionFee"}>Tuition Fee</option>
            <option value={"LibraryFee"}>Library Fee</option>
            <option value={"LatePaymentFee"}>Late Payment Fee</option>
          </select>
          {/* <label htmlFor={`${formId}-form-type`}>Amount. *</label> */}
          {/* <i className="material-icons">payments</i> */}
         
        </div>
        {errors.type && (
            <p
              role="alert"
              style={{
              }}
              className="bg-red-a700"
            >
              {errors.type.message}
            </p>
          )}
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-amount`}
            className="border-black "
            type="text"
            placeholder=" "
            {...register("amount", { required: true })}
          />
          <label htmlFor={`${formId}-form-amount`}>Amount. *</label>
          <i className="material-icons">payments</i>
          {errors.amount && (
            <p role="alert" className="bg-red-a700">
              {errors.amount.message}
            </p>
          )}
        </div>

        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-contact`}
            className="border-black "
            type="number"
            placeholder=" "
            {...register("phoneNumber", { required: true })}
          />
          <label htmlFor={`${formId}-form-contact`}>Contact No. *</label>
          <i className="material-icons">phone</i>
          {errors.phoneNumber && (
            <p role="alert" className="bg-red-a700">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-upiVPA`}
            className="border-black "
            type="text"
            placeholder=" "
            {...register("upiVPA", { required: false })}
          />
          <label htmlFor={`${formId}-form-upiVPA`}>UPI Address</label>
          {/* <i className="material-icons"></i> */}
          {errors.upiVPA && (
            <p role="alert" className="bg-red-a700">
              {errors.upiVPA.message}
            </p>
          )}
        </div>

        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-form-remarks`}
            className="border-black "
            type="text"
            placeholder=""
            {...register("remarks", { required: false })}
          />
          <label htmlFor={`${formId}-form-remarks`}>Remarks</label>
          {/* <i className="material-icons"></i> */}
          {errors.remarks && (
            <p role="alert" className="bg-red-a700">
              {errors.remarks.message}
            </p>
          )}
        </div>

        <div className="footer-form-send-button">
          <button className="button bg-deep-orange-600" type="submit">
            SUBMIT <i className={"material-icons"}>arrow_right_alt</i>
          </button>
        </div>
      </form>
    </>
  );
};
