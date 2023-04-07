import { SplideOptions } from "@splidejs/splide";
import { useMemo } from "react";
import { 
    IAEBUSINESSGRADUATEINSTITUTEGRENOBLEFRANCE, IAEBordeauxUniversityFrance,
    SingaporeHumanResourcesInstitute, SingaporeInstituteofManagementSIMGroup,
    SingaporecampusofJamesCookUniversity, StaffordshireUniversityUk,
    UniversityofStirlingUK
} from "../../../Assets/Assets";
import { CommonImg, SplideSlide, SplideSlider } from "../Components";
import "./GlobalAffiliations.scss";

const GlobalAffiliations = () => {
    const sliderData = useMemo(() => {
        return {
            slides: [
                { img: IAEBUSINESSGRADUATEINSTITUTEGRENOBLEFRANCE},
                { img: IAEBordeauxUniversityFrance},
                { img: SingaporeHumanResourcesInstitute},
                { img: SingaporeInstituteofManagementSIMGroup},
                { img: SingaporecampusofJamesCookUniversity},
                { img: StaffordshireUniversityUk},
                { img: UniversityofStirlingUK},
            ]
        };
    }, []);

    const sliderOptions = useMemo(() => {
        return {
            type : 'loop',
            perPage: 3,
            gap: 10,
            focus  : 'center',
            autoplay: true,
            interval: 5000,
            breakpoints: {
                767: {
                    perPage: 1
                },
                991: {
                    perPage: 2
                }
            }
        } as SplideOptions;
    }, []);

    const slideImgs = useMemo(() => {
        return sliderData.slides.map((slide, i) => {
            return (
                <SplideSlide key={i}>
                    <CommonImg img={slide.img} />
                </SplideSlide>
            )
        })
    }, [sliderData]);

    return (
        <>
            <div className={"global-affiliations"}>
                <div className={"card-panel"}>
                    <h5 className={"heading"}>GLOBAL AFFILIATIONS</h5>
                    <SplideSlider options={sliderOptions}>
                        {slideImgs}
                    </SplideSlider>
                </div>
            </div>
        </>
    )
}

export default GlobalAffiliations;