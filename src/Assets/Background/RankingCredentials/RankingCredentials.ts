import AICTEJpg from "./Images/aicte-logo-150x150-1.jpg";
import BangaloreUniversityJpg from "./Images/Bangalore-University-150x150-1.jpg";

import AICTEWebp from "./Images/aicte-logo-150x150-1.jpg";
import BangaloreUniversityWebp from "./Images/Bangalore-University-150x150-1.jpg";
import { IImage } from "../../../Utils/js/Utils";

const AICTE : IImage = {type: "jpg", alt: "", jpg: AICTEJpg, webp: AICTEWebp, w: 150, h: 150};
const BangaloreUniversity : IImage = {type: "jpg", alt: "", jpg: BangaloreUniversityJpg, webp: BangaloreUniversityWebp, w: 150, h: 150};

export {
    AICTE, BangaloreUniversity
}