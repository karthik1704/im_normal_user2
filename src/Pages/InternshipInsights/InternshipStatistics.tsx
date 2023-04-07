import {
    IBMRInternshipSnapshotGraph, OverallInternshipRecord, ServicesOfferedInternship
} from "../../Assets/Assets";

const InternshipStatistics = () => {
    return (
        <>
            <div className={"internship-statistics"}>
                <div className={"card-panel"}>
                    <h4 className={"heading"}>Internship Statistics</h4>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-12 d-col-8"}>
                            <div className={"card-panel"}>
                                <h5 className={"heading"}>Companies Breakup</h5>
                                <div className={"img-div"}>
                                    <picture>
                                        {IBMRInternshipSnapshotGraph.webp && <source type={"image/webp"} srcSet={IBMRInternshipSnapshotGraph.webp}/>}
                                        {
                                            IBMRInternshipSnapshotGraph.type === "jpg" && <img src={IBMRInternshipSnapshotGraph.jpg} alt={IBMRInternshipSnapshotGraph.alt} width={IBMRInternshipSnapshotGraph.w} height={IBMRInternshipSnapshotGraph.h} />
                                        }
                                        {
                                            IBMRInternshipSnapshotGraph.type === "png" && <img src={IBMRInternshipSnapshotGraph.png} alt={IBMRInternshipSnapshotGraph.alt} width={IBMRInternshipSnapshotGraph.w} height={IBMRInternshipSnapshotGraph.h} />
                                        }                        
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className={"mb-col-24 t-col-12 d-col-8"}>
                            <div className={"card-panel"}>
                                <h5 className={"heading"}>Sectors Offered Internship</h5>
                                <div className={"img-div"}>
                                    <picture>
                                        {OverallInternshipRecord.webp && <source type={"image/webp"} srcSet={OverallInternshipRecord.webp}/>}
                                        {
                                            OverallInternshipRecord.type === "jpg" && <img src={OverallInternshipRecord.jpg} alt={OverallInternshipRecord.alt} width={OverallInternshipRecord.w} height={OverallInternshipRecord.h} />
                                        }
                                        {
                                            OverallInternshipRecord.type === "png" && <img src={OverallInternshipRecord.png} alt={OverallInternshipRecord.alt} width={OverallInternshipRecord.w} height={OverallInternshipRecord.h} />
                                        }                        
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className={"t-col-6 hide-on-mb hide-on-d"}></div>
                        <div className={"mb-col-24 t-col-12 d-col-8"}>
                            <div className={"card-panel"}>
                                <h5 className={"heading"}>Overall Internship Record</h5>
                                <div className={"img-div"}>
                                    <picture>
                                        {ServicesOfferedInternship.webp && <source type={"image/webp"} srcSet={ServicesOfferedInternship.webp}/>}
                                        {
                                            ServicesOfferedInternship.type === "jpg" && <img src={ServicesOfferedInternship.jpg} alt={ServicesOfferedInternship.alt} width={ServicesOfferedInternship.w} height={ServicesOfferedInternship.h} />
                                        }
                                        {
                                            ServicesOfferedInternship.type === "png" && <img src={ServicesOfferedInternship.png} alt={ServicesOfferedInternship.alt} width={ServicesOfferedInternship.w} height={ServicesOfferedInternship.h} />
                                        }                        
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InternshipStatistics;