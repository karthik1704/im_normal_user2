import "./GlobalOrientation.scss";

import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Globals";
import { CommonImg } from "../CommonImg/CommonImg";
import { GlobalExposureSeven } from "../../../Assets/Assets";

const GlobalOrientation = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoDivRef = useRef<HTMLDivElement>(null);
    const globalRef = useRef<HTMLDivElement>(null);

    const handleResize = useCallback(() => {
        if (!contentRef.current || !videoRef.current || !videoDivRef.current || !globalRef.current) return;

        videoDivRef.current.style.height = contentRef.current.offsetHeight + "px";
        globalRef.current.style.height = contentRef.current.offsetHeight + "px";


    }, [videoRef, contentRef, globalRef])

    useEffect(() => {
        if (!contentRef.current || !videoRef.current || !globalRef.current) return;

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [contentRef, videoRef, globalRef, handleResize]);



    return (
        <>
            <div >

            </div>
            <div className={"global-orientation card-panel"} ref={globalRef}>
                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-24 d-col-12"}>
                        <div className={"global-orientation-text-wrapper card-panel"} ref={contentRef}>
                            <div className={"global-orientation-heading-div"}>
                                <h5 className={""}>Global Orientation MBA with International Exposure 7 Partner Institutions In 3 Countries Alumni Working In 13 Countries & 22 Cities</h5>
                            </div>
                            <div className={"global-orientation-para-div"}>
                                <p className={"content"}>In today's business scenario cross-cultural awareness and networking has become important for management students who need to have updates about international markets. Currently it is important that B Schools offer global exposure to students through international exchange programmes, foreign internships and Foreign trips.</p>
                                <p className={"support"}>To bring a global orientation to the teaching-learning process in the classroom, AIMS-IBS has designed program delivery in such a way that it exposes students to cultures and business practices in different countries. The AIMS-IBS believes that global exposure is the key to success in today's economy and the same is inbuilt in the course design and delivery through...</p>
                                <Link className={"button bg-deep-orange-600"} to={ROUTES["GLOBAL EXPOSURE"]}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-col-24 t-col-24 d-col-12"}>
                        {/* <div className={"home-big-yt"}>
                            <YoutubeEmbed 
                                link={"https://www.youtube-nocookie.com/embed/aVqzn5UE_-s"}
                                title={"Video"}
                                id={"home-yt-iframe"}
                            />
                        </div> */}
                        <CommonImg img={GlobalExposureSeven}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalOrientation;