import { useMemo } from "react";
import { Alumni, AlumniWorking, BusinessBaronSurvey, FacultyTrainers, HighestAverageSalary, HighestOverallSalary, HighestSalary, IndustryExpertsOnBoard, IntegratedMBA, PartnerInstitutions, ReturnOnInvestment, TimesOfIndia, WorldEducationCongress } from "../../../Assets/Assets";
import { CardSlider, ICardSlider } from "../../Components/Components";
import "./RankingsPage.scss";

interface IRankingsPage {
    imgLoadCallback: () => void;
}
const RankingsPage = ({imgLoadCallback}: IRankingsPage) => {

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
                    content: "Alumi 8100+ in 13 countries",
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
            imgLoadCallback: imgLoadCallback,
        } as ICardSlider;
    }, [imgLoadCallback])


    return (
        <>
            <div className={"rankings-page"}>
                <div className={"card-panel"}>
                    <CardSlider {...cardData}/>
                </div>
            </div>
        </>
    )
}

export default RankingsPage;