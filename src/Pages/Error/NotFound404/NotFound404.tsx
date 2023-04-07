import { Link } from "react-router-dom"
import { ROUTES } from "../../../Common/Globals"

import { Helmet } from 'react-helmet-async';
import { PageLocation } from "../../../Common/Components/Components";

const NotFound404 = () => {
    return (
        <>
            <Helmet>
                <title>404 Not Found - AIMS IBS</title>
                <meta name="description" content="Not Found :("/>
            </Helmet>
            <PageLocation title={"NOT FOUND"} locations={[]} />
            <div className={"t-align-center"}>
                <h5>404 Not Found</h5>
                <p>Please check the url and try again</p>
                <p>
                    Or go to homepage: <Link className={"button"} to={ROUTES["HOMEPAGE"]}>Homepage</Link>
                </p>
            </div>
        </>
    )
}

export default NotFound404;