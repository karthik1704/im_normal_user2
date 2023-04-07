import HeroSliderOneJpg from "./Images/hero_slider_one.jpg";
import HeroSliderTwoJpg from "./Images/hero_slider_two.jpg";
import HeroSliderThreeJpg from "./Images/hero_slider_three.jpg";
import HeroSliderFourJpg from "./Images/hero_slider_four.jpg";
import HeroSliderOneWebp from "./Images/hero_slider_one.webp";
import HeroSliderTwoWebp from "./Images/hero_slider_two.webp";
import HeroSliderThreeWebp from "./Images/hero_slider_three.webp";
import HeroSliderFourWebp from "./Images/hero_slider_four.webp";
import { IImage } from "../../../Utils/js/Utils";

const HeroSliderOne : IImage = {type: "jpg", alt: "", jpg: HeroSliderOneJpg, webp: HeroSliderOneWebp, w: 1428, h: 720};
const HeroSliderTwo : IImage = {type: "jpg", alt: "", jpg: HeroSliderTwoJpg, webp: HeroSliderTwoWebp, w: 1428, h: 720};
const HeroSliderThree : IImage = {type: "jpg", alt: "", jpg: HeroSliderThreeJpg, webp: HeroSliderThreeWebp, w: 1428, h: 720};
const HeroSliderFour : IImage = {type: "jpg", alt: "", jpg: HeroSliderFourJpg, webp: HeroSliderFourWebp, w: 1428, h: 720};

export {
    HeroSliderOne, HeroSliderTwo, HeroSliderThree, HeroSliderFour
}