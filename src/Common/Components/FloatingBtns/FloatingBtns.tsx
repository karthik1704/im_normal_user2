import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unhideAllPagePopupForm } from "../../../Store/Slices/App/AppSlice";
import { ROUTES } from "../../Globals";
import "./FloatingBtns.scss";

export const FloatingBtns = () => {
    const dispatch = useDispatch();

    const unhidePopupModal = () => {
        dispatch(unhideAllPagePopupForm());
    }

    return (
        <div className={"floating-btns"}>
            <Link className={"button downloads-btn bg-deep-orange-600"} to={ROUTES["DOWNLOADS"]}>DOWNLOADS</Link>
            <button className={"button bg-deep-orange-600"} onClick={unhidePopupModal}>APPLY NOW</button>
        </div>
    )
}