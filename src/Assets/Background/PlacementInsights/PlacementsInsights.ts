import IBMRGlobalAlumniNetworkJpg from "./Images/IBMR-Global-Alumni-Network.jpg";
import IBMRNationalAlumniNetworkJpg from "./Images/IBMR-National-Alumni-Network.jpg";
import OverallPlacementPng from "./Images/Overall-placement.png";
import SalaryStructurePng from "./Images/salary-structure.png";
import SpecializationBreakUpPng from "./Images/specialization-break-up.png";
import IBMRPlacementStatisticsPng from "./Images/IBMR-Placement-Statistics.png";

import IBMRGlobalAlumniNetworkWebp from "./Images/IBMR-Global-Alumni-Network.webp";
import IBMRNationalAlumniNetworkWebp from "./Images/IBMR-National-Alumni-Network.webp";
import OverallPlacementWebp from "./Images/Overall-placement.webp";
import SalaryStructureWebp from "./Images/salary-structure.webp";
import SpecializationBreakUpWebp from "./Images/specialization-break-up.webp";
import IBMRPlacementStatisticsWebp from "./Images/IBMR-Placement-Statistics.webp";
import { IImage } from "../../../Utils/js/Utils";

const IBMRGlobalAlumniNetwork : IImage = {type: "jpg", alt: "", jpg: IBMRGlobalAlumniNetworkJpg, webp: IBMRGlobalAlumniNetworkWebp, w: 1000, h: 552};
const IBMRNationalAlumniNetwork : IImage = {type: "jpg", alt: "", jpg: IBMRNationalAlumniNetworkJpg, webp: IBMRNationalAlumniNetworkWebp, w: 1000, h: 552};
const OverallPlacement : IImage = {type: "png", alt: "", png: OverallPlacementPng, webp: OverallPlacementWebp, w: 500, h: 500};
const SalaryStructure : IImage = {type: "png", alt: "", png: SalaryStructurePng, webp: SalaryStructureWebp, w: 549, h: 364};
const SpecializationBreakUp : IImage = {type: "png", alt: "", png: SpecializationBreakUpPng, webp: SpecializationBreakUpWebp, w: 543, h: 364};
const IBMRPlacementStatistics : IImage = {type: "png", alt: "", png: IBMRPlacementStatisticsPng, webp: IBMRPlacementStatisticsWebp, w: 500, h: 460};

export {
    IBMRNationalAlumniNetwork, IBMRGlobalAlumniNetwork, OverallPlacement, SalaryStructure, SpecializationBreakUp,
    IBMRPlacementStatistics, 
}