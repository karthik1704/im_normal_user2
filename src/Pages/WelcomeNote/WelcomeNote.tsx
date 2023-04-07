import { Helmet } from "react-helmet-async";
import { CommonAboutUs } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import PatronsAndBoardMembers from "./PatreonsAndBoardMembers";
import SectionOne from "./SectionOne";
import "./WelcomeNote.scss"



const WelcomeNote = () => {
    return (
        <>
            <Helmet>
                <title>Welcome Note - AIMS IBS</title>
                <meta name="description" content="Welcome Note"/>
            </Helmet>
            <PageLocation img={CommonAboutUs} locations={["HOME", "Welcome Note"]} title={"Welcome Note"}/>
            <div className={"welcome-note"}>
                <div>
                    <SectionOne />
                </div>
                <div>
                    <PatronsAndBoardMembers />
                </div>
            </div>
        </>
    )
}

export default WelcomeNote;
