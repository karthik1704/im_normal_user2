import { RankingPodium, Medal, MedalFirst, RankingSheet, Deal, Pay } from "../../../Assets/Assets";
import "./RecognitionsPage.scss";

interface RecognitionAchievementCardData {
    img: string, imgAlt: string, title: string, content: string, contentTwo?: string, imgLoadCallback: ()=>void,
}
const RecognitionAchievementCard = ({img, imgAlt, title, content, contentTwo, imgLoadCallback}: RecognitionAchievementCardData) => {
    return (
        <>
            <div className={"recognitions-achivement-card"}>
                <div className={"card-panel"}>
                    <div className={"title-div"}>
                        <img src={img} alt={imgAlt} onLoad={imgLoadCallback}/>
                        <p>{title}</p>
                    </div>
                    <div className={"content-div"}>
                        <p className={"content"}>{content}</p>
                        <p className={"content-two"}>{contentTwo}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

interface IRecognitionsPage {
    imgLoadCallback: () => void,
}
const RecognitionsPage = ({imgLoadCallback}: IRecognitionsPage) => {
    return (
        <>
            <div className={"recognitions-page"}>
                <div className={"card-panel"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-24 d-col-8"}>
                            <h5 className={"recognitions-page-heading"}>Your Dream</h5>
                            <h5 className={"recognitions-page-heading"}>MBA+PGPM</h5>
                            <h5 className={"recognitions-page-heading"}>With global orientation</h5>
                            <p className={"recognitions-page-para"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend leo sodales cursus condimentum. Cras vehicula felis mauris, vel lobortis enim gravida at. Nunc venenatis ex non orci mattis semper. Pellentesque accumsan odio orci, a commodo nibh placerat in. Nulla tempus nisl id tempus pretium. Etiam dapibus eu quam at tempus. Nullam turpis purus, porta at lacus et, vestibulum auctor tellus. Praesent in auctor risus, ac viverra leo. Mauris ut posuere nunc, et ultricies augue. Duis dignissim nulla sed ipsum accumsan, a scelerisque sapien cursus. Cras dapibus enim leo, sit amet congue sem molestie nec. </p>
                        </div>
                        <div className={"d-col-1 hide-on-t hide-on-mb"}></div>
                        <div className={"mb-col-24 t-col-24 d-col-15"}>
                            <div className={"col-wrapper-24"}>
                                <div className={"mb-col-24 t-col-11 d-col-11"}>
                                    <RecognitionAchievementCard
                                        img={RankingPodium}
                                        imgAlt={"Ranked Top 20 B Schools"}
                                        title={"Ranked Top 20 B Schools"}
                                        content={"In South India By Times of India B School Survey"}
                                        imgLoadCallback={imgLoadCallback}
                                    />
                                </div>
                                <div className={"t-col-2 d-col-2 hide-on-mb"}></div>
                                <div className={"mb-col-24 t-col-11 d-col-11"}>
                                    <RecognitionAchievementCard
                                        img={Medal}
                                        imgAlt={"Asia's Best B School"}
                                        title={"Asia's Best B School"}
                                        content={"Best Emerging Business School"}
                                        contentTwo={"By World Education Congress & CMO Asia"}
                                        imgLoadCallback={imgLoadCallback}
                                    />
                                </div>
                            </div>
                            <div className={"col-wrapper-24"}>
                                <div className={"mb-col-24 t-col-11 d-col-11"}>
                                    <RecognitionAchievementCard
                                        img={RankingSheet}
                                        imgAlt={"Ranking 26th By"}
                                        title={"Ranking 26th By"}
                                        content={"The Business Baron Survey"}
                                        imgLoadCallback={imgLoadCallback}
                                    />
                                </div>
                                <div className={"t-col-2 d-col-2 hide-on-mb"}></div>
                                <div className={"mb-col-24 t-col-11 d-col-11"}>
                                    <RecognitionAchievementCard
                                        img={MedalFirst}
                                        imgAlt={"India's 1st School"}
                                        title={"India's 1st School"}
                                        content={"To Offer Industry Aligned MBA"}
                                        imgLoadCallback={imgLoadCallback}
                                    />
                                </div>
                            </div>
                            <div className={"col-wrapper-24"}>
                                <div className={"mb-col-24 t-col-11 d-col-11"}>
                                    <RecognitionAchievementCard
                                        img={Pay}
                                        imgAlt={"4th Best For"}
                                        title={"4th Best For"}
                                        content={"Highest Salary In South India"}
                                        imgLoadCallback={imgLoadCallback}
                                    />
                                </div>
                                <div className={"t-col-2 d-col-2 hide-on-mb"}></div>
                                <div className={"mb-col-24 t-col-11 d-col-11"}>
                                    <RecognitionAchievementCard
                                        img={Deal}
                                        imgAlt={"7 Partners"}
                                        title={"7 Partners"}
                                        content={"Institutions In 3 Countries"}
                                        imgLoadCallback={imgLoadCallback}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecognitionsPage;