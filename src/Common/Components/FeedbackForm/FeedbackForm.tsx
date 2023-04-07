import { useEffect, useState } from "react";
import { IFeedbackForm as IFForm } from "../../Api/Form/Types/Form/Form";
import {
  postFeedbackForm,
  reset as resetFeedbackForm,
} from "../../../Store/Slices/FeedbackForm/FeedbackFormSlice";
import { useDispatch, useSelector } from "react-redux";

import "./FeedbackForm.scss";

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

export interface IFeedbackForm {
  setFilledAtLeastOnce?: React.Dispatch<React.SetStateAction<boolean>>; // used by popup form
  formId: string;
  closeSuccessMsgCallback?: () => void;
}
export const FeedbackForm = ({
  setFilledAtLeastOnce,
  formId,
  closeSuccessMsgCallback,
}: IFeedbackForm) => {
  const [name, setName] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [remarks, setRemarks] = useState("");

  const [emailSent, setEmailSent] = useState(false);

  const dispatch = useDispatch();
  const request = useSelector(
    (state: { feedbackForm: IFForm }) => state.feedbackForm
  );
  useEffect(()=>setEmailSent(false),[])

  useEffect(() => {
    if (
      request.request_states.post.fulfilled &&
      formId === request.request_states.post.formId
    ) {
      setEmailSent(true);
      setName("");
      setParentName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setRemarks("");
    } else {
      setEmailSent(false);
    }
  }, [
    request.request_states.post.fulfilled,
    formId,
    request.request_states.post.formId,
  ]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleParentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParentName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(e.target.value);
  };
  const handleRemarks = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRemarks(e.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(resetFeedbackForm());
    dispatch(
      postFeedbackForm({
        email: email,
        name: name,
        parent_name: parentName,
        phone: phone,
        course: course,
        remarks: remarks,

        formId: formId,
      })
    );
  };

  return (
    <>
      <form className={"common-form"} onSubmit={handleFormSubmit}>
        {emailSent && (
          <div className={"notified-div"}>
            <h6 className={"t-align-center "}>
              We have been notified. Thank you for filling out the form!
            </h6>
          </div>
        )}

        {formId === request.request_states.post.formId && (
          <ErrorDiv errors={request.detail.validation_errors.name} />
        )}
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-footer-form-name`}
            className="border-black "
            type="text"
            placeholder=" "
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor={`${formId}-footer-form-name`}>Student Name *</label>
          <i className="material-icons">perm_identity</i>
        </div>

        {formId === request.request_states.post.formId && (
          <ErrorDiv errors={request.detail.validation_errors.parent_name} />
        )}
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-footer-form-parent_name`}
            className="border-black "
            type="text"
            placeholder=" "
            value={parentName}
            onChange={handleParentNameChange}
            required
          />
          <label htmlFor={`${formId}-footer-form-name`}>Parent Name *</label>
          <i className="material-icons">perm_identity</i>
        </div>

        {formId === request.request_states.post.formId && (
          <ErrorDiv errors={request.detail.validation_errors.email} />
        )}
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-footer-form-email`}
            className="border-black "
            type="text"
            placeholder=" "
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor={`${formId}-footer-form-email`}>Email ID *</label>
          <i className="material-icons">email</i>
        </div>

        {formId === request.request_states.post.formId && (
          <ErrorDiv errors={request.detail.validation_errors.phone} />
        )}
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-footer-form-contact`}
            className="border-black "
            type="number"
            placeholder=" "
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <label htmlFor={`${formId}-footer-form-contact`}>Contact No. *</label>
          <i className="material-icons">phone</i>
        </div>

        {formId === request.request_states.post.formId && (
          <ErrorDiv errors={request.detail.validation_errors.course} />
        )}
        <div className="input-div icon footer-form-input">
          <input
            id={`${formId}-footer-form-course`}
            className="border-black "
            type="text"
            placeholder=" "
            value={course}
            onChange={handleCourse}
            required
          />
          <label htmlFor={`${formId}-footer-form-location`}>
            Course and batch. *
          </label>
          <i className="material-icons">batch_prediction</i>
        </div>

        {formId === request.request_states.post.formId && (
          <ErrorDiv errors={request.detail.validation_errors.remarks} />
        )}
        <div className="input-div icon footer-form-input">
          <textarea
            id={`${formId}-footer-form-remarks`}
            className="border-black "
            placeholder=" "
            value={remarks}
            onChange={handleRemarks}
            rows={3}
            required
          ></textarea>
          <label htmlFor={`${formId}-footer-form-location`}>Remarks. *</label>
          <i className="material-icons">comment</i>
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
