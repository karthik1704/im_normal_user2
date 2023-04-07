import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../../../Assets/Assets";
import { hideAllPagePopupFormPermanently, IApp } from "../../../Store/Slices/App/AppSlice";
import { resetPostState, resetValidationErrors } from "../../../Store/Slices/RequestForm/RequestFormSlice";
import { JSXModal } from "../../../Utils/js/Utils";
import { CommonForm } from "../CommonForm/CommonForm";
import "./PopupForm.scss";

export const PopupForm = () => {

    const dispatch = useDispatch();
    const app = useSelector((state: {app: IApp}) => state.app);

    // const [filledAtLeastOnce, setFilledAtLeastOnce] = useState(false);

    const hideModal = () => {
        // change code in Downloads.tsx if the following function call is changed...
        // i.e., if form is hidden temporaryly... update in the above file
        dispatch(hideAllPagePopupFormPermanently());
        dispatch(resetValidationErrors());
        dispatch(resetPostState());

        // if (filledAtLeastOnce) {
        //     dispatch(hideAllPagePopupFormPermanently());
        // }
    }

    return (
        <>
            <JSXModal portalRootClassName={"popup-form-modal"} isShown={!app.allPagePopupForm.isHiddenPermanent && !app.allPagePopupForm.isHidden} toggleCallback={hideModal}>
                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-24 d-col-15"}>
                        <div className={"logo-div"}>
                            <picture>
                                { Logo.webp && <source type={"image/webp"} srcSet={Logo.webp} /> }
                                <img
                                    src={Logo.type === "jpg"?Logo.jpg:Logo.png}
                                    alt={Logo.alt?Logo.alt:""}
                                    width={Logo.w}
                                    height={Logo.h}
                                />
                            </picture>
                        </div>
                        <div className={"content"}>
                            <div>
                                <h6 className={"heading t-align-center"}>Ranked Top 20 B Schools In South India By Times of India<br/>B School Survey</h6>
                                <p className={"sub-heading t-align-center"}>Program Blended With Industry 4.0 & Education 4.0 Requirements</p>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-24 t-col-24 d-col-1"}></div>
                    <div className={"mb-col-24 t-col-24 d-col-8"}>
                        <div className={"card-panel popup-form"}>
                            <CommonForm closeSuccessMsgCallback={hideModal} formId={"popup"} type={"popup"} />
                        </div>
                    </div>
                </div>
            </JSXModal>
        </>
    )
}