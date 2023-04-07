import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { 
    Alumni, AlumniWorking, BusinessBaronSurvey, CommonWhyAimsIbs, FacultyTrainers, HighestAverageSalary, HighestOverallSalary, HighestSalary, IndustryExpertsOnBoard, IntegratedMBA, PartnerInstitutions, ReturnOnInvestment, TimesOfIndia, WorldEducationCongress
} from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { BoxedCards, IBoxedCards } from "../../Utils/js/Utils";
import "./RankingsCredentialsOurStrengths.scss";

const RankingsCredentialsOurStrengths = () => {
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
                <title>Rankings, Credentials & Our Strengths - AIMS IBS</title>
                <meta name="description" content="Rankings, Credentials & Our Strengths"/>
            </Helmet>
            <PageLocation img={CommonWhyAimsIbs} locations={["HOME", "RANKINGS, CREDENTIALS & OUR STRENGTHS"]} title={"RANKINGS, CREDENTIALS & OUR STRENGTHS"}/>
            <div className={"ranking-crendentials"}>
                <BoxedCards {...cardData}/>
            </div>
        </>
    )
}

export default RankingsCredentialsOurStrengths;