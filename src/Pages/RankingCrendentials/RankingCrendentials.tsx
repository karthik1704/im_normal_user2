import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
    BangaloreUniversity as BUImg, AICTE as AICTEImg, Alumni, AlumniWorking, BusinessBaronSurvey, FacultyTrainers, HighestAverageSalary, HighestOverallSalary, HighestSalary, IndustryExpertsOnBoard, IntegratedMBA, PartnerInstitutions, ReturnOnInvestment, TimesOfIndia, WorldEducationCongress, CommonAboutUs
} from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { BoxedCards, IBoxedCards, isInViewportThreshold } from "../../Utils/js/Utils";
import "./RankingCrendentials.scss";

const BangaloreUniversity = () => {

    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                {value: "-100%", duration: 0, delay: 500},
                {value: 0, duration: 1000, delay: 500},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 500},
                {value: 1, duration: 1000, delay: 500},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);
    
    return (
        <>
            <div className={"bangalore-university"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>Bangalore University – ACCREDITED WITH ‘A’ GRADE BY NAAC</h5>
                    <div className={"img-div"}>
                        <picture>
                            {BUImg.webp && <source type={"image/webp"} srcSet={BUImg.webp}/>}
                            {
                                BUImg.type === "jpg" && <img src={BUImg.jpg} alt={BUImg.alt} width={BUImg.w} height={BUImg.h} />
                            }
                            {
                                BUImg.type === "png" && <img src={BUImg.png} alt={BUImg.alt} width={BUImg.w} height={BUImg.h} />
                            }
                        </picture>
                    </div>
                    <h6 className={"heading-two"}>Karnataka’s No. 1 and among India’s top universities</h6>
                    <p>Established in 1964, Bangalore University has completed fifty-two years of fruitful existence and has come to be hailed as one of the largest universities of Asia. It is located on its sprawling 1,100 acres of campus, which is named as ‘Jnana Bharathi’. The university has a larger number of affiliated colleges and P.G. Centres with a rich diversity of programme options.</p>
                </div>
            </div>
        </>
    )
}

const AICTE = () => {

    const cardPanelRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!cardPanelRef.current) return;
        if (isInViewportThreshold(cardPanelRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!cardPanelRef.current) return;

        anime({
            targets: cardPanelRef.current,
            translateX: [
                {value: "100%", duration: 0, delay: 500},
                {value: 0, duration: 1000, delay: 500},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 500},
                {value: 1, duration: 1000, delay: 500},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [cardPanelRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);

    return (
        <>
            <div className={"aicte"}>
                <div className={"card-panel"} ref={cardPanelRef}>
                    <h5 className={"heading"}>AICTE-All India Council for Technical Education, New Delhi</h5>
                    <div className={"img-div"}>                        
                        <picture>
                            {AICTEImg.webp && <source type={"image/webp"} srcSet={AICTEImg.webp}/>}
                            {
                                AICTEImg.type === "jpg" && <img src={AICTEImg.jpg} alt={AICTEImg.alt} width={AICTEImg.w} height={AICTEImg.h} />
                            }
                            {
                                AICTEImg.type === "png" && <img src={AICTEImg.png} alt={AICTEImg.alt} width={AICTEImg.w} height={AICTEImg.h} />
                            }
                        </picture>
                    </div>
                    <p>The All India Council for Technical Education (AICTE) is the statutory body and a national-level council for technical education, under Department of Higher Education, Ministry of Human Resource Development.[3] Established in November 1945 first as an advisory body and later on in 1987 given statutory status by an Act of Parliament, AICTE is responsible for proper planning and coordinated development of the technical education and management education system in India. The AICTE accredits postgraduate and graduate programs under specific categories at Indian institutions as per its charter.</p>
                </div>
            </div>
        </>
    )
}

const Accreditations = () => {
    return (
        <>
            <div className={"accreditations"}>
                <h4 className={"heading"}>ACCREDITATIONS</h4>
                <div className={"col-wrapper-24"}>
                    <div className={"mb-col-24 t-col-12 d-col-12"}>
                        <BangaloreUniversity />
                    </div>
                    <div className={"mb-col-24 t-col-12 d-col-12"}>
                        <AICTE />
                    </div>
                </div>
            </div>
        </>
    )
}

const RankingCrendentials = () => {
    const cardData = useMemo(() => {
        return {
            cards: [
                {
                    img: TimesOfIndia,
                    divClassName: "TimesOfIndia",
                    content: "Ranked among Top 20 B Schools in South India by Times of India B School Survey",
                },
                {
                    img: WorldEducationCongress,
                    divClassName: "WorldEducationCongress",
                    content: "AWARDED AS ASIA’S BEST EMERGING BUSINESS SCHOOL BY WORLD EDUCATION CONG.. & CMO ASIA",
                },
                {
                    img: BusinessBaronSurvey,
                    divClassName: "BusinessBaronSurvey",
                    content: "RANKING 26TH BY BUSINESS BARON SURVEY",
                },
                {
                    img: IntegratedMBA,
                    divClassName: "IntegratedMBA",
                    content: "INDIA’S 1ST B-SCHOOL TO OFFER INDUSTRY INTEGRATED MBA",
                },
                {
                    img: ReturnOnInvestment,
                    divClassName: "ReturnOnInvestment",
                    content: "17TH BEST FOR RETURN ON INVESTMENT IN INDIA",
                },
                {
                    img: AlumniWorking,
                    divClassName: "AlumniWorking",
                    content: "ALUMNI WORKING IN 13 COUNTRIES & 23 CITIES",
                },
                {
                    img: HighestSalary,
                    divClassName: "HighestSalary",
                    content: "4TH BEST FOR HIGHEST SALARY IN SOUTH INDIA",
                },
                {
                    img: HighestAverageSalary,
                    divClassName: "HighestAverageSalary",
                    content: "18TH BEST FOR HIGHEST AVERAGE SALARIES",
                },
                {
                    img: IndustryExpertsOnBoard,
                    divClassName: "IndustryExpertsOnBoard",
                    content: "90+ INDUSTRY EXPERTS ON BOARD",
                },
                {
                    img: Alumni,
                    divClassName: "Alumni",
                    content: "Alumni",
                },
                {
                    img: HighestOverallSalary,
                    divClassName: "HighestOverallSalary",
                    content: "4TH BEST FOR HIGHEST OVERALL SALARY",
                },
                {
                    img: PartnerInstitutions,
                    divClassName: "PartnerInstitutions",
                    content: "7 PARTNER INSTITUTIONS IN 4 COUNTRIES",
                },
                {
                    img: FacultyTrainers,
                    divClassName: "FacultyTrainers",
                    content: "225 STRONG FACULTY & TRAINERS",
                },
            ],
        } as IBoxedCards;
    }, []);

    return (
        <>
            <Helmet>
                <title>Ranking Crendentials - AIMS IBS</title>
                <meta name="description" content="Ranking Crendentials"/>
            </Helmet>
            <PageLocation img={CommonAboutUs} locations={["HOME", "RANKING & CRENDENTIALS"]} title={"RANKING & CRENDENTIALS"}/>
            <div className={"ranking-crendentials"}>
                <Accreditations />
                <BoxedCards {...cardData}/>
            </div>
        </>
    )
}

export default RankingCrendentials;