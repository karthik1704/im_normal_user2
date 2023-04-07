import { useEffect, useState } from "react";
import { IRequestForm } from "../../Api/Form/Types/Form/Form";
import { postRequestForm, reset as resetReqForm} from "../../../Store/Slices/RequestForm/RequestFormSlice";
import { JSXModal } from "../../../Utils/js/Utils";
import { useDispatch, useSelector } from "react-redux";

import "./CommonForm.scss";

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

export interface ICommonForm {
    type: "popup" | "normal",
    setFilledAtLeastOnce?: React.Dispatch<React.SetStateAction<boolean>> // used by popup form
    formId: string,
    closeSuccessMsgCallback?: () => void,
}
export const CommonForm = ({type, setFilledAtLeastOnce, formId, closeSuccessMsgCallback}: ICommonForm) => {

    // const [course, setCourse] = useState("");
    // const [program, setProgram] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const [emailSent, setEmailSent] = useState(false);

    const dispatch = useDispatch();
    const request = useSelector( (state: {requestForm: IRequestForm}) => state.requestForm);

    useEffect(() => {
        if (request.request_states.post.fulfilled && formId === request.request_states.post.formId) {
            setEmailSent(true);
            if (type === "popup" && setFilledAtLeastOnce) {
                setFilledAtLeastOnce(true);
            }
        }
        else {
            setEmailSent(false)
        }
    }, [request.request_states.post.fulfilled, type, setFilledAtLeastOnce, formId, request.request_states.post.formId])
    
    // const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setCourse(e.target.value);
    // }
    // const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setProgram(e.target.value);
    // }
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(resetReqForm());
        dispatch(postRequestForm({
            email: email,
            name: name,
            phone: phone,
            location: location,
            // program: program,
            // course: course,
            formId: formId,
        }));
    }

    // LOGIC TO SHOW AND HIDE MODAL [START]
    const [isModalShown, setIsModalShown] = useState(false);
    const showModal = () => {
        setIsModalShown(true);
    }
    const hideModal = () => {
        setIsModalShown(false);
        if (closeSuccessMsgCallback && request.request_states.post.fulfilled) closeSuccessMsgCallback();
    }
    useEffect(() => {
        if (request.request_states.post.pending && formId === request.request_states.post.formId) {
            showModal();
        }
    }, [request.request_states.post.pending, formId, request.request_states.post.formId]);
    // LOGIC TO SHOW AND HIDE MODAL [END]

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
                    className="border-white " 
                    type="text" 
                    placeholder=" " 
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <label htmlFor={`${formId}-footer-form-name`}>Name *</label>
                <i className="material-icons">perm_identity</i>
            </div>

            { formId === request.request_states.post.formId && (
                <ErrorDiv errors={request.detail.validation_errors.email}/>
            )}            
            <div className="input-div icon footer-form-input">
                <input 
                    id={`${formId}-footer-form-email`}
                    className="border-white " 
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
                    className="border-white " 
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
                <ErrorDiv errors={request.detail.validation_errors.location}/>
            )}
            <div className="input-div icon footer-form-input">
                <input 
                    id={`${formId}-footer-form-location`}
                    className="border-white " 
                    type="text" 
                    placeholder=" " 
                    value={location}
                    onChange={handleLocationChange}
                    required
                />
                <label htmlFor={`${formId}-footer-form-location`}>State/City *</label>
                <i className="material-icons">perm_identity</i>
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
        <JSXModal toggleCallback={hideModal} isShown={isModalShown}>
            {
                request.request_states.post.pending && (formId === request.request_states.post.formId) && <h5>Processing...</h5>                  
            }
            {
                request.request_states.post.rejected && (
                    <>
                        <h5 className={"red-700"}>Failed. We regret for the inconvenience caused. Please try again.</h5>
                    </>
                )
            }
            {
                request.request_states.post.fulfilled && (
                    <>
                        <h5 className={""}>We have been notified. Thank you for filling out the form!</h5>
                    </>
                )
            }
        </JSXModal>
        </>    
    )
}