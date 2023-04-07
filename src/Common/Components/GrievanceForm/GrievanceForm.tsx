import { useEffect, useState } from "react";
import { IGrievanceForm as IGForm } from "../../Api/Form/Types/Form/Form";
import {postGrievanceForm, reset as resetGrievanceForm} from "../../../Store/Slices/GrievanceForm/GrievanceFormSlice";
import { useDispatch, useSelector } from "react-redux";

import "./GrievanceForm.scss";

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

export interface IGrievanceForm {
    setFilledAtLeastOnce?: React.Dispatch<React.SetStateAction<boolean>> // used by popup form
    formId: string,
    closeSuccessMsgCallback?: () => void,
}
export const GrievanceForm = ({ setFilledAtLeastOnce, formId, closeSuccessMsgCallback}: IGrievanceForm) => {

    const [name, setName] = useState("");
    const [parentName, setParentName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [natureOfGrievance, setNatureOfGrievance] = useState("");
    const [message, setMessage] = useState("");

    const [emailSent, setEmailSent] = useState(false);

    const dispatch = useDispatch();
    const request = useSelector( (state: {grievanceForm: IGForm}) => state.grievanceForm);
    useEffect(()=>setEmailSent(false),[])
    useEffect(() => {
        if (request.request_states.post.fulfilled && formId === request.request_states.post.formId) {
            setEmailSent(true);
            setName("")
            setParentName("")
            setEmail("")
            setPhone("")
            setNatureOfGrievance("")
            setMessage("")
           
        }
        else {
            setEmailSent(false)
        }
    }, [request.request_states.post.fulfilled,   formId, request.request_states.post.formId])
   
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleParentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParentName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleNatureOfGrievance = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNatureOfGrievance(e.target.value);
    }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(resetGrievanceForm());
        dispatch(postGrievanceForm({
            email: email,
            name: name,
            parent_name: parentName,
            phone: phone,
            nature_of_grievance: natureOfGrievance,
            message: message,
           
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
                <ErrorDiv errors={request.detail.validation_errors.name}/>
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

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.parent_name}/>
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
                <ErrorDiv errors={request.detail.validation_errors.nature_of_grievance}/>
            )}
            <div className="input-div icon footer-form-input">
                <input 
                    id={`${formId}-footer-form-nature_of_grievance`}
                    className="border-black " 
                    type="text" 
                    placeholder=" " 
                    value={natureOfGrievance}
                    onChange={handleNatureOfGrievance}
                    required
                />
                <label htmlFor={`${formId}-footer-form-location`}>Nature of Grievance</label>
                <i className="material-icons">live_help</i>
            </div>

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.message}/>
            )}
            <div className="input-div icon footer-form-input">
                <textarea 
                    id={`${formId}-footer-form-message`}
                    className="border-black " 
                    placeholder=" " 
                    value={message}
                    onChange={handleMessage}
                    rows={3}
                    required
                ></textarea>
                <label htmlFor={`${formId}-footer-form-location`}>Message *</label>
                <i className="material-icons">comment</i>

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