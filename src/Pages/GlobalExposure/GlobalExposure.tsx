import { PageLocation, Testimonials } from "../../Common/Components/Components";
import {
    GlobalExposureOne, GlobalExposureTwo, GlobalExposureThree, GlobalExposureFour,
    GlobalExposureFive, GlobalExposureSix, GlobalExposureSeven, GlobalExposureEight, GlobalExposureNine, CommonGlobalExposure,
} from "../../Assets/Assets";
import { useMemo } from "react";
import G from 'react-grid-gallery';

import "./GlobalExposure.scss";
import { Helmet } from "react-helmet-async";


interface ICard {
    h: string, p: string,
}
const Card = ({h, p}: ICard) => {
    return (
        <>
            <div className={"card"}>
                <div className={"card-panel"}>
                    <h6 className={"t-align-center"}>{h}</h6>
                    <p>{p}</p>
                </div>
            </div>
        </>
    )
}

interface IImage {
    src: string, thumbnail: string, thumbnailWidth?: string, thumbnailHeight?: string,
}
const GlobalExposure = () => {

    const cardsData = useMemo(() => {
        return [
            {h: "Faculty Exchange Programs", p: "Some of our faculty who have rich experience in diverse areas from industry and academia visit foreign universities to teach courses in Entrepreneurship, Project management, Global Service Industry etc. These faculty bring back wealth knowledge and experience and share the same with students. AIMS IBS also invites leading professors from reputed foreign B Schools to deliver the courses."},
            {h: "Foreign Internships", p: "AIMS IBS offers exclusive opportunities for students wherein selected students will have a chance to do their internship in MNC’s of selected Countries. The opportunity offers chance to understand and work with MNC’s in respective countries."},
            {h: "International Industrial/Exposure visits", p: "AIMS IBS organises exclusive trips which takes care of offering an exposure to international destiny’s, industrial perspective and educational systems."},
            {h: "Student Exchange Programs", p: "AIMS IBS offers value adding opportunities to students and these exchange programs offer great learning and cross cultural experiences. The programs are offered in different countries and opportunities are limited to selected candidates."},
        ] as ICard[];
    }, []);

    const cardsJSX = useMemo(() => {
        return cardsData.map((c, i) => {
            return (
                <div className={"mb-col-24 t-col-12 d-col-12"}>
                    <Card {...c}/>
                </div>
            )
        })
    }, [cardsData])

    const galleryData = useMemo(() => {
        return [
            {src: GlobalExposureOne.jpg, thumbnail: GlobalExposureOne.jpg},
            {src: GlobalExposureTwo.jpg, thumbnail: GlobalExposureTwo.jpg},
            {src: GlobalExposureThree.jpg, thumbnail: GlobalExposureThree.jpg},
            {src: GlobalExposureFour.jpg, thumbnail: GlobalExposureFour.jpg},
            {src: GlobalExposureFive.jpg, thumbnail: GlobalExposureFive.jpg},
            {src: GlobalExposureSix.jpg, thumbnail: GlobalExposureSix.jpg},
            {src: GlobalExposureSeven.jpg, thumbnail: GlobalExposureSeven.jpg},
            {src: GlobalExposureEight.jpg, thumbnail: GlobalExposureEight.jpg},
            {src: GlobalExposureNine.jpg, thumbnail: GlobalExposureNine.jpg},
        ] as IImage[];
    }, []);

    const thumbnailStyle = () => {
        return (
            {
                borderRadius: "6px",
                width: "280px",
                cursor: "pointer",
            }
        );
    }

    return (
        <>
            <Helmet>
                <title>Global Exposure - AIMS IBS</title>
                <meta name="description" content="Global Exposure"/>
            </Helmet>
            <PageLocation img={CommonGlobalExposure} locations={["HOME", "GLOBAL EXPOSURE"]} title={"GLOBAL EXPOSURE"}/>
            <div className={"global-exposure"}>
                <div className={"card-panel"}>
                    <h4 className={"t-align-center"}>GLOBAL CERTIFICATIONS PROGRAMS</h4>

                    <p>In today’s business scenario cross-cultural awareness and networking has become important for management students who need to have updates about international markets. Currently it is important that B Schools offer global exposure to students through international exchange programmes, foreign internships and Foreign trips.</p>
                    <p>To bring a global orientation to the teaching-learning process in the classroom, AIMS IBS has designed program delivery in such a way that it exposes students to cultures and business practices in different countries.</p>
                    <p>The AIMS IBS believes that global exposure is the key to success in today’s economy and the same is inbuilt in the course design and delivery through;</p>

                    <div className={"col-wrapper-24"}>
                        {cardsJSX}
                    </div>
                </div>
                <div className={"global-exposure-testimonials"}>
                    <div className={"card-panel"}>
                        <h5 className={"heading"}>Global Exposure Testimonials</h5>
                        <Testimonials mode={"GLOBAL_EXPOSURE"}/>
                    </div>
                </div>
                <div className={"card-panel"}>
                    <div className={"gallery-wrapper"}>
                        <G
                            images={galleryData}
                            enableImageSelection={false}
                            rowHeight={180}
                            thumbnailStyle={thumbnailStyle}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalExposure;