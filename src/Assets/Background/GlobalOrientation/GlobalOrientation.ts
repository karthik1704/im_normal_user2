import { IImage } from "../../../Utils/js/Utils";
import UniversityJpg from "./Images/university.jpg";
import UniversityWebp from "./Images/university.webp";
import GlobalOrientationBgVideo from "./Videos/Earth_Zoom_In.mp4";

const University : IImage = {type: "jpg", alt: "", jpg: UniversityJpg, webp: UniversityWebp, w: 2200, h: 521};

export {
    University,
    GlobalOrientationBgVideo,
}