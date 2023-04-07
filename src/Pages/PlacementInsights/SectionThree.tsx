import { OverallPlacement, SalaryStructure, SpecializationBreakUp, IBMRPlacementStatistics } from "../../Assets/Assets";

const SectionThree = () => {
    return (
        <>
            <div className={"section-three"}>
                <div className={"placement-statistics card-panel"}>
                    <h4 className={"heading"}>Placement Statistics</h4>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-12 d-col-12"}>
                            <div className={"img-div"}>
                                <picture>
                                    {OverallPlacement.webp && <source type={"image/webp"} srcSet={OverallPlacement.webp}/>}
                                    {
                                        OverallPlacement.type === "jpg" && <img src={OverallPlacement.jpg} alt={OverallPlacement.alt} width={OverallPlacement.w} height={OverallPlacement.h} />
                                    }
                                    {
                                        OverallPlacement.type === "png" && <img src={OverallPlacement.png} alt={OverallPlacement.alt} width={OverallPlacement.w} height={OverallPlacement.h} />
                                    }                        
                                </picture>
                            </div>
                        </div>
                        <div className={"mb-col-24 t-col-12 d-col-12"}>
                            <div className={"img-div"}>
                                <picture>
                                    {IBMRPlacementStatistics.webp && <source type={"image/webp"} srcSet={IBMRPlacementStatistics.webp}/>}
                                    {
                                        IBMRPlacementStatistics.type === "jpg" && <img src={IBMRPlacementStatistics.jpg} alt={IBMRPlacementStatistics.alt} width={IBMRPlacementStatistics.w} height={IBMRPlacementStatistics.h} />
                                    }
                                    {
                                        IBMRPlacementStatistics.type === "png" && <img src={IBMRPlacementStatistics.png} alt={IBMRPlacementStatistics.alt} width={IBMRPlacementStatistics.w} height={IBMRPlacementStatistics.h} />
                                    }                        
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"other-charts card-panel"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-12 d-col-12"}>
                            <h4 className={"heading"}>Salary Structure</h4>
                            <div className={"img-div"}>
                                <picture>
                                    {SalaryStructure.webp && <source type={"image/webp"} srcSet={SalaryStructure.webp}/>}
                                    {
                                        SalaryStructure.type === "jpg" && <img src={SalaryStructure.jpg} alt={SalaryStructure.alt} width={SalaryStructure.w} height={SalaryStructure.h} />
                                    }
                                    {
                                        SalaryStructure.type === "png" && <img src={SalaryStructure.png} alt={SalaryStructure.alt} width={SalaryStructure.w} height={SalaryStructure.h} />
                                    }                        
                                </picture>
                            </div>
                        </div>
                        <div className={"mb-col-24 t-col-12 d-col-12"}>
                            <h4 className={"heading"}>Specialization BreakUp</h4>
                            <div className={"img-div"}>
                                <picture>
                                    {SpecializationBreakUp.webp && <source type={"image/webp"} srcSet={SpecializationBreakUp.webp}/>}
                                    {
                                        SpecializationBreakUp.type === "jpg" && <img src={SpecializationBreakUp.jpg} alt={SpecializationBreakUp.alt} width={SpecializationBreakUp.w} height={SpecializationBreakUp.h} />
                                    }
                                    {
                                        SpecializationBreakUp.type === "png" && <img src={SpecializationBreakUp.png} alt={SpecializationBreakUp.alt} width={SpecializationBreakUp.w} height={SpecializationBreakUp.h} />
                                    }                        
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionThree;