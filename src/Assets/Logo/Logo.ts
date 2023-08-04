import { IImage } from "../../Utils/js/Utils";

// import LogoPng from "./logo.png";
import LogoPng from "./aims-ibs-logo-april-2023.png";
import TwentyThreeYearsLogoPng from "./aims-ibs-23-years-logo-april-2023.png";

// import LogoWebp from "./logo.webp";
import LogoWebp from "./aims-ibs-logo-april-2023.webp";
import TwentyThreeYearsLogoWebp from "./aims-ibs-23-years-logo-april-2023.webp";

export const Logo: IImage = {
  type: "png",
  alt: "AIMS IBS",
  png: LogoPng,
  webp: LogoWebp,
  w: 946,
  h: 752,
};
export const TwentyOneYearsLogo: IImage = {
  type: "png",
  alt: "Celebrating 23 years in education",
  png: TwentyThreeYearsLogoPng,
  webp: TwentyThreeYearsLogoWebp,
  w: 794,
  h: 730,
};
