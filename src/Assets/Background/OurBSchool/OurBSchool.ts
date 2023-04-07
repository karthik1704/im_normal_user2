import OurBSchoolOneJpg from "./Images/our-b-school.jpg";
import OurBSchoolTwoJpg from "./Images/our-b-school-1.jpg";
import VisionPng from "./Images/vision.png";
import MissionPng from "./Images/mission.png";

import OurBSchoolOneWebp from "./Images/our-b-school.webp";
import OurBSchoolTwoWebp from "./Images/our-b-school-1.webp";
import VisionWebp from "./Images/vision.webp";
import MissionWebp from "./Images/mission.webp";
import { IImage } from "../../../Utils/js/Utils";

const OurBSchoolOne : IImage = {type: "jpg", alt: "", jpg: OurBSchoolOneJpg, webp: OurBSchoolOneWebp, w: 580, h: 633};
const OurBSchoolTwo : IImage = {type: "jpg", alt: "", jpg: OurBSchoolTwoJpg, webp: OurBSchoolTwoWebp, w: 1599, h: 483};
const Vision : IImage = {type: "png", alt: "", png: VisionPng, webp: VisionWebp, w: 216, h: 134};
const Mission : IImage = {type: "png", alt: "", png: MissionPng, webp: MissionWebp, w: 214, h: 254};

export {
    OurBSchoolOne, OurBSchoolTwo, Mission, Vision
}