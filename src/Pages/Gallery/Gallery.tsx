import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PageLocation } from "../../Common/Components/Components";
import { 
    LearningAndAdventureCampAtLifetrees2, LearningAndAdventureCampAtLifetrees4, LearningAndAdventureCampAtLifetrees5,
    LearningAndAdventureCampAtLifetrees6, LearningAndAdventureCampAtLifetrees7,

    BatchInauguration1, BatchInauguration10, BatchInauguration11, BatchInauguration12, BatchInauguration2,
    BatchInauguration3, BatchInauguration4, BatchInauguration5, BatchInauguration6, BatchInauguration7, BatchInauguration8,
    BatchInauguration9,

    IndustrialVisitsTvsMotors1, IndustrialVisitsTvsMotors2, IndustrialVisitsTvsMotors3, IndustrialVisitsTvsMotors4,
    IndustrialVisitsTvsMotors5, IndustrialVisitsTvsMotors6,

    InternationalStudyTour1, InternationalStudyTour2, InternationalStudyTour3, InternationalStudyTour4, InternationalStudyTour5,
    InternationalStudyTour6, InternationalStudyTour7,

    AnnualCulturalDay1, AnnualCulturalDay2, AnnualCulturalDay3, AnnualCulturalDay4, AnnualCulturalDay5, 
    AnnualCulturalDay6, AnnualCulturalDay7,

    AnnualSportsMeet1, AnnualSportsMeet2, AnnualSportsMeet3, AnnualSportsMeet4, AnnualSportsMeet5, AnnualSportsMeet6,

    CelebrationsAtCampus1, CelebrationsAtCampus10, CelebrationsAtCampus12, CelebrationsAtCampus13, CelebrationsAtCampus14,
    CelebrationsAtCampus15, CelebrationsAtCampus16, CelebrationsAtCampus2, CelebrationsAtCampus3, CelebrationsAtCampus7,
    CelebrationsAtCampus8, CelebrationsAtCampus9,

    GraduationDay1, GraduationDay2, GraduationDay3, GraduationDay4, GraduationDay5, GraduationDay6, CommonGalleryOne,
} from "../../Assets/Assets";
import { year2020 } from "./image2020";
import { year2021 } from "./image2021";
import { year2022 } from "./image2022";
import { year2023 } from "./image2023";
import G from 'react-grid-gallery';
import "./Gallery.scss";
import { Helmet } from "react-helmet-async";

interface IImage {
    src: string, thumbnail: string, thumbnailWidth?: string, thumbnailHeight?: string,
}
interface ISection {
    section: string,
    imgs: IImage[],
}
const Section = ({section, imgs}: ISection) => {
    return (
        <>
            <div className={"section"}>
                <h6>{section}</h6>
                <G
                    images={imgs}
                    enableImageSelection={false}
                />
            </div>
        </>
    )
}

interface IYear {
    year: string,
    _isOpened?: boolean,
    sections: ISection[],
}
const Year = ({year, sections, _isOpened}: IYear) => {

    const [isOpened, setIsOpened] = useState(_isOpened);
    const yearRef = useRef<HTMLDivElement>(null);

    const toggleYear = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened])

    useEffect(() => {
        if (!yearRef.current) return;

        if(isOpened) {
            yearRef.current.style.height = "unset";
            return;
        }
        yearRef.current.style.height = "0px";
        return;
    }, [yearRef, isOpened]);

    const sectionsJSX = useMemo(()=>{
        return sections.map((section, index) => {
            return <Section {...section} key={index}/>
        })
    }, [sections]);

    return (
        <>
            <div className={"year-container"}>
                <div className={"card-panel"}>
                    <div className={"year"}>
                        <div className={"year-heading"} onClick={toggleYear}>
                            <p><i className="material-icons">{isOpened? "remove" : "add"}</i></p>
                            <h4 className={"hide-on-mb"}>{year}</h4>
                            <h6 className={"hide-on-d hide-on-t"}>{year}</h6>
                            <p className={"up-down"}><i className="material-icons down">{isOpened? "keyboard_arrow_up" : "keyboard_arrow_down"}</i></p>
                            {/* <button className={"button bg-deep-orange-600"} onClick={toggleYear}>
                                {isOpened? "CLOSE" : "OPEN"}
                            </button> */}
                        </div>
                        <div className={"section-wrapper"} ref={yearRef}>
                            {sectionsJSX}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Gallery = () => {
    const galleryData = useMemo(()=>{
        return [
            year2023,
            year2022,
            year2021, 
            year2020,
            {
                year: "2018 - 2019",
              
                sections: [
                    {
                        section: "ADVENTURE CAMP",
                        imgs: [
                            {src: LearningAndAdventureCampAtLifetrees2.jpg, thumbnail: LearningAndAdventureCampAtLifetrees2.jpg},
                            {src: LearningAndAdventureCampAtLifetrees4.jpg, thumbnail: LearningAndAdventureCampAtLifetrees4.jpg},
                            {src: LearningAndAdventureCampAtLifetrees5.jpg, thumbnail: LearningAndAdventureCampAtLifetrees5.jpg},
                            {src: LearningAndAdventureCampAtLifetrees6.jpg, thumbnail: LearningAndAdventureCampAtLifetrees6.jpg},
                            {src: LearningAndAdventureCampAtLifetrees7.jpg, thumbnail: LearningAndAdventureCampAtLifetrees7.jpg},
                        ]
                    },
                    {
                        section: "INAUGURATION FUNCTION",
                        imgs: [
                            {src: BatchInauguration1.jpg, thumbnail: BatchInauguration1.jpg},
                            {src: BatchInauguration2.jpg, thumbnail: BatchInauguration2.jpg},
                            {src: BatchInauguration3.jpg, thumbnail: BatchInauguration3.jpg},
                            {src: BatchInauguration4.jpg, thumbnail: BatchInauguration4.jpg},
                            {src: BatchInauguration5.jpg, thumbnail: BatchInauguration5.jpg},
                            {src: BatchInauguration6.jpg, thumbnail: BatchInauguration6.jpg},
                            {src: BatchInauguration7.jpg, thumbnail: BatchInauguration7.jpg},
                            {src: BatchInauguration8.jpg, thumbnail: BatchInauguration8.jpg},
                            {src: BatchInauguration9.jpg, thumbnail: BatchInauguration9.jpg},
                            {src: BatchInauguration10.jpg, thumbnail: BatchInauguration10.jpg},
                            {src: BatchInauguration11.jpg, thumbnail: BatchInauguration11.jpg},
                            {src: BatchInauguration12.jpg, thumbnail: BatchInauguration12.jpg},
                        ]
                    },
                    {
                        section: "INDUSTRIAL VISIT",
                        imgs: [
                            {src: IndustrialVisitsTvsMotors1.jpg, thumbnail: IndustrialVisitsTvsMotors1.jpg},
                            {src: IndustrialVisitsTvsMotors2.jpg, thumbnail: IndustrialVisitsTvsMotors2.jpg},
                            {src: IndustrialVisitsTvsMotors3.jpg, thumbnail: IndustrialVisitsTvsMotors3.jpg},
                            {src: IndustrialVisitsTvsMotors4.jpg, thumbnail: IndustrialVisitsTvsMotors4.jpg},
                            {src: IndustrialVisitsTvsMotors5.jpg, thumbnail: IndustrialVisitsTvsMotors5.jpg},
                            {src: IndustrialVisitsTvsMotors6.jpg, thumbnail: IndustrialVisitsTvsMotors6.jpg},
                        ]
                    },
                    {
                        section: "INTERNATIONAL STUDY TOUR",
                        imgs: [
                            {src: InternationalStudyTour1.jpg, thumbnail: InternationalStudyTour1.jpg},
                            {src: InternationalStudyTour2.jpg, thumbnail: InternationalStudyTour2.jpg},
                            {src: InternationalStudyTour3.jpg, thumbnail: InternationalStudyTour3.jpg},
                            {src: InternationalStudyTour4.jpg, thumbnail: InternationalStudyTour4.jpg},
                            {src: InternationalStudyTour5.jpg, thumbnail: InternationalStudyTour5.jpg},
                            {src: InternationalStudyTour6.jpg, thumbnail: InternationalStudyTour6.jpg},
                            {src: InternationalStudyTour7.jpg, thumbnail: InternationalStudyTour7.jpg},
                        ]
                    },
                ]
            },
            {
                year: "2017",
                sections: [
                    {
                        section: "ANNUAL CULTURAL DAY",
                        imgs: [
                            {src: AnnualCulturalDay1.jpg, thumbnail: AnnualCulturalDay1.jpg},
                            {src: AnnualCulturalDay2.jpg, thumbnail: AnnualCulturalDay2.jpg},
                            {src: AnnualCulturalDay3.jpg, thumbnail: AnnualCulturalDay3.jpg},
                            {src: AnnualCulturalDay4.jpg, thumbnail: AnnualCulturalDay4.jpg},
                            {src: AnnualCulturalDay5.jpg, thumbnail: AnnualCulturalDay5.jpg},
                            {src: AnnualCulturalDay6.jpg, thumbnail: AnnualCulturalDay6.jpg},
                            {src: AnnualCulturalDay7.jpg, thumbnail: AnnualCulturalDay7.jpg},
                        ]
                    },
                    {
                        section: "ANNUAL SPORTS MEET",
                        imgs: [
                            {src: AnnualSportsMeet1.jpg, thumbnail: AnnualSportsMeet1.jpg},
                            {src: AnnualSportsMeet2.jpg, thumbnail: AnnualSportsMeet2.jpg},
                            {src: AnnualSportsMeet3.jpg, thumbnail: AnnualSportsMeet3.jpg},
                            {src: AnnualSportsMeet4.jpg, thumbnail: AnnualSportsMeet4.jpg},
                            {src: AnnualSportsMeet5.jpg, thumbnail: AnnualSportsMeet5.jpg},
                            {src: AnnualSportsMeet6.jpg, thumbnail: AnnualSportsMeet6.jpg},
                        ]
                    },
                    {
                        section: "CELEBRATIONS @ CAMPUS",
                        imgs: [
                            {src: CelebrationsAtCampus1.jpg, thumbnail: CelebrationsAtCampus1.jpg},
                            {src: CelebrationsAtCampus10.jpg, thumbnail: CelebrationsAtCampus10.jpg},
                            {src: CelebrationsAtCampus12.jpg, thumbnail: CelebrationsAtCampus12.jpg},
                            {src: CelebrationsAtCampus13.jpg, thumbnail: CelebrationsAtCampus13.jpg},
                            {src: CelebrationsAtCampus14.jpg, thumbnail: CelebrationsAtCampus14.jpg},
                            {src: CelebrationsAtCampus15.jpg, thumbnail: CelebrationsAtCampus15.jpg},
                            {src: CelebrationsAtCampus16.jpg, thumbnail: CelebrationsAtCampus16.jpg},
                            {src: CelebrationsAtCampus2.jpg, thumbnail: CelebrationsAtCampus2.jpg},
                            {src: CelebrationsAtCampus3.jpg, thumbnail: CelebrationsAtCampus3.jpg},
                            {src: CelebrationsAtCampus7.jpg, thumbnail: CelebrationsAtCampus7.jpg},
                            {src: CelebrationsAtCampus8.jpg, thumbnail: CelebrationsAtCampus8.jpg},
                            {src: CelebrationsAtCampus9.jpg, thumbnail: CelebrationsAtCampus9.jpg},
                        ]
                    },
                    {
                        section: "GRADUATION DAY",
                        imgs: [
                            {src: GraduationDay1.jpg, thumbnail: GraduationDay1.jpg},
                            {src: GraduationDay2.jpg, thumbnail: GraduationDay2.jpg},
                            {src: GraduationDay3.jpg, thumbnail: GraduationDay3.jpg},
                            {src: GraduationDay4.jpg, thumbnail: GraduationDay4.jpg},
                            {src: GraduationDay5.jpg, thumbnail: GraduationDay5.jpg},
                            {src: GraduationDay6.jpg, thumbnail: GraduationDay6.jpg},
                        ]
                    },
                ]
            },
        ] as IYear[];
    }, []);

    const galleryJSX = useMemo(() => {
        return galleryData.map((year, index) => {
            return <Year {...year} key={index}/>
        });
    }, [galleryData]);
    
    return (
        <>
            <Helmet>
                <title>Gallery - AIMS IBS</title>
                <meta name="description" content="Gallery"/>
            </Helmet>
            <PageLocation img={CommonGalleryOne} locations={["HOME", "GALLERY"]} title={"GALLERY"}/>
            <div className={"gallery"}>
                <div className={""}>
                    {galleryJSX}
                </div>
            </div>
        </>
    )
}

export default Gallery;
