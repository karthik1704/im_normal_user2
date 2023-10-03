import SigninLoading from "./Signin"
import SignoutLoading from "./Signout"
import SignupLoading from "./Signup"
import GetUserProfileLoading from "./GettingUserProfile"
import PatchUserProfileLoading from "./PatchingUserProfile"
import Loading from "./Loading/Loading"
import PaymentLoading from "./PaymentLoading/PaymentLoading"

export const LOADING_SCREEN = {
    "SIGNIN": "SIGNIN",
    "SIGNOUT": "SIGNOUT",
    "SIGNUP": "SIGNUP",
    "GET_USER": "GET_USER",
    "PATCH_USER": "PATCH_USER",
    "LOADING": "LOADING",
    "PAYMENTLOADING": "PAYMENTLOADING",
}

export interface ILoadingScreenUIParams {
    name: string
}

export interface ILoadingScreenUIComponents {
    SIGNIN: JSX.Element,
    SIGNOUT: JSX.Element,
    SIGNUP: JSX.Element,
    GET_USER: JSX.Element,
    PATCH_USER: JSX.Element,
    LOADING: JSX.Element,
    PAYMENTLOADING: JSX.Element,
    [key: string]: JSX.Element,
}

const LoadingScreenUI = ({name}: ILoadingScreenUIParams) => {
    const LOADING_SCREEN_COMPONENTS: ILoadingScreenUIComponents= {
        SIGNIN: <SigninLoading />,
        SIGNOUT: <SignoutLoading />,
        SIGNUP: <SignupLoading />,
        GET_USER: <GetUserProfileLoading />,
        PATCH_USER: <PatchUserProfileLoading />,
        LOADING: <Loading />,
        PAYMENTLOADING: <PaymentLoading/>,
    }
    return (
        <>
            {LOADING_SCREEN_COMPONENTS[name]}
        </>
    )
}

export default LoadingScreenUI