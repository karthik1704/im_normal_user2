import IBMRInternshipSnapshotGraphPng from "./Images/IBMR-Internship-Snapshot-Graph.png";
import OverallInternshipRecordPng from "./Images/Overall-internship-record.png";
import ServicesOfferedInternshipPng from "./Images/services-offered-internship.png";

import IBMRInternshipSnapshotGraphWebp from "./Images/IBMR-Internship-Snapshot-Graph.webp";
import OverallInternshipRecordWebp from "./Images/Overall-internship-record.webp";
import ServicesOfferedInternshipWebp from "./Images/services-offered-internship.webp";
import { IImage } from "../../../Utils/js/Utils";

const IBMRInternshipSnapshotGraph : IImage = {type: "png", alt: "", png: IBMRInternshipSnapshotGraphPng, webp: IBMRInternshipSnapshotGraphWebp, w: 500, h: 460};
const OverallInternshipRecord : IImage = {type: "png", alt: "", png: OverallInternshipRecordPng, webp: OverallInternshipRecordWebp, w: 500, h: 460};
const ServicesOfferedInternship : IImage = {type: "png", alt: "", png: ServicesOfferedInternshipPng, webp: ServicesOfferedInternshipWebp, w: 500, h: 460};

export {
    IBMRInternshipSnapshotGraph, OverallInternshipRecord, ServicesOfferedInternship,
}