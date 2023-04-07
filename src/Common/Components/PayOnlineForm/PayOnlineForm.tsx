import { useEffect, useState } from "react";
import { IPayOnlineForm as IPOForm } from "../../Api/Form/Types/Form/Form";
import {postPayOnlineForm, reset as resetPayOnlineForm} from "../../../Store/Slices/PayOnlineForm/PayOnlineFormSlice";
import { useDispatch, useSelector } from "react-redux";

import "./PayOnlineForm.scss";

const ErrorDiv = ({errors, divClassName}: {errors: string[], divClassName?: string}) => {
    return (
        <>
        {
            errors.length ? (
                <div className={`card-panel error-div ${divClassName} bg-red-a700`}>
                    {
                        errors.map((errorMsg, index) => {
                            return (
                                <p 
                                    key={index}
                                    className="t-align-center"
                                >{errorMsg}</p>
                            )
                        })
                    }
                </div>
            ) : null
        }
        </>
    )
}

export interface IPayOnlineForm {
    setFilledAtLeastOnce?: React.Dispatch<React.SetStateAction<boolean>> // used by popup form
    formId: string,
    closeSuccessMsgCallback?: () => void,
}
export const PayOnlineForm = ({ setFilledAtLeastOnce, formId, closeSuccessMsgCallback}: IPayOnlineForm) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    const [emailSent, setEmailSent] = useState(false);

    const dispatch = useDispatch();
    const request = useSelector( (state: {payOnlineForm: IPOForm}) => state.payOnlineForm);

    useEffect(() => {
        if (request.request_states.post.fulfilled && formId === request.request_states.post.formId) {
            setEmailSent(true);
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone("")
            setCourse("")
            setAmount("")
            setAddress("")
           
        }
        else {
            setEmailSent(false)
        }
    }, [request.request_states.post.fulfilled,   formId, request.request_states.post.formId])
   
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourse(e.target.value);
    }
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }
    const handleAddress = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddress(e.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(resetPayOnlineForm());
        dispatch(postPayOnlineForm({
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            course: course,
            amount: amount,
            address: address,
           
            formId: formId,
        }));
    }



    return (
        <>
        <form className={"common-form"} onSubmit={handleFormSubmit}>
            {
                (emailSent) &&
                    <div className={"notified-div"}>
                        <h6 className={"t-align-center"}>
                            We have been notified. Thank you for filling out the form!
                        </h6>
                    </div>
            }

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.firstName}/>
            )}
            <div className="input-div icon footer-form-input">
                <input 
                    id={`${formId}-footer-form-first_name`}
                    className="border-black " 
                    type="text" 
                    placeholder=" " 
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                />
                <label htmlFor={`${formId}-footer-form-name`}>First Name *</label>
                <i className="material-icons">perm_identity</i>
            </div>

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.lastName}/>
            )}
            <div className="input-div icon footer-form-input">
                <input 
                    id={`${formId}-footer-form-last_name`}
                    className="border-black " 
                    type="text" 
                    placeholder=" " 
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                />
                <label htmlFor={`${formId}-footer-form-name`}>Last Name *</label>
                <i className="material-icons">perm_identity</i>
            </div>


            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.email}/>
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
            
            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.phone}/>
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

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.course}/>
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
                <label htmlFor={`${formId}-footer-form-contact`}>Course and batch. *</label>
                <i className="material-icons">batch_prediction</i>
            </div>

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.amount}/>
            )}
            <div className="input-div icon footer-form-input">
                <input 
                    id={`${formId}-footer-form-amount`}
                    className="border-black " 
                    type="text" 
                    placeholder=" " 
                    value={amount}
                    onChange={handleAmount}
                    required
                />
                <label htmlFor={`${formId}-footer-form-location`}>Amount. *</label>
                <i className="material-icons">payments</i>
            </div>

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.address}/>
            )}
            <div className="input-div icon footer-form-input">
                <textarea 
                    id={`${formId}-footer-form-address`}
                    className="border-black " 
                    placeholder=" " 
                    value={address}
                    onChange={handleAddress}
                    rows={3}
                    required
                ></textarea>
                <label htmlFor={`${formId}-footer-form-location`}>Address. *</label>
                <i className="material-icons">location_city</i>

            </div>

            <div className="footer-form-send-button">
                <button
                    className="button bg-deep-orange-600"
                    type="submit"
                >
                    SUBMIT <i className={"material-icons"}>arrow_right_alt</i>
                </button>
            </div>
        </form>
      
        </>    
    )
}