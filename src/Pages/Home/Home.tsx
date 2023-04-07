import { useEffect, useMemo, useRef, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    HeroSliderFour, HeroSliderOne, HeroSliderThree, HeroSliderTwo
} from '../../Assets/Assets';
// import { Social } from '../../Common/Components/Components';

import './Home.scss';
import { AchievementCounter, CommonImg, GlobalAffiliations, GlobalOrientation, InternationalExchange, PagedInfo, Programs, SplideSlide, SplideSlider, YoutubeEmbed } from '../../Common/Components/Components';
import { SplideOptions } from '@splidejs/splide';

const HomeSocialIFrames = () => {
    const [counter, setCounter] = useState(0);
    // const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
    const [fbParsed, setFbParsed] = useState(false);
    const fbElemRef = useRef<HTMLDivElement>(null);

    //timer is used to try to reload fb iframe till fb sdk is downloaded (index.html)
    useEffect(() => {
        if (!fbElemRef.current) return;
        let fbElem = fbElemRef.current;
        let fbHtmlElem = fbElem.querySelector("iframe"); //html element inside fb iframe

        // if html element inside fb iframe is present then the fb script ran already
        if (fbHtmlElem) {
            return;
        }

        if (!fbParsed) {
            const timer = setInterval(() => {
                // skip first interval
                if (counter > 0) {
                    if (!window.FB) return;
                    if (!fbHtmlElem) {
                        window.FB.XFBML.parse();
                        setFbParsed(true);
                        clearInterval(timer);
                    }
                }
                setCounter(counter + 1);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [counter, fbParsed]);

    return (
        <div className={"home-social-iframes center"}>
            <div id="fb-root"></div>
            <div className={"col-wrapper-2"}>
                <div className={"mb-col-2 t-col-1 d-col-1"}>
                    <div className={"home-big-yt"}>
                        <YoutubeEmbed 
                            link={"https://www.youtube-nocookie.com/embed/3fXcTXCpAsI"}
                            title={"Video"}
                            id={"home-yt-iframe"}
                        />
                    </div>
                </div>
                <div className={"mb-col-2 t-col-1 d-col-1"}>
                    <div className={"fb-iframe-div t-align-center"}>
                        <div ref={fbElemRef} className="fb-page" data-href="https://www.facebook.com/aimsibs/" data-tabs="timeline" data-height="315" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/aimsibs/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/aimsibs/">AIMS IBS</a></blockquote></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {

    const heroSliderData = useMemo(() => {
        return {
            slides: [
                { img: HeroSliderOne},
                { img: HeroSliderTwo},
                { img: HeroSliderThree},
                { img: HeroSliderFour},
            ]
        };
    }, [])

    const sliderOptions: SplideOptions = useMemo(() => {
        return {
            type : 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
        }
    }, []);

    const slideImgs = useMemo(() => {
        return heroSliderData.slides.map((slide, i) => {
            return (
                <SplideSlide key={i}>
                    <CommonImg img={slide.img} />
                </SplideSlide>
            )
        })
    }, [heroSliderData]);

    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home"/>
            </Helmet>
            <div className={"home"}>
                {/* <Social /> */}
                <div className={""}>
                    <SplideSlider className={"home-slider"} options={sliderOptions}>
                        {slideImgs}
                    </SplideSlider>
                </div>
                <GlobalAffiliations />
                <div className={"card-panel"}>
                    <InternationalExchange />
                </div>
                <Programs />
                <PagedInfo />
                <AchievementCounter />
                <GlobalOrientation />
                {/* <div className={"partners-container"}>
                    <Partners />
                </div> */}
                <div className={"home-yt-embeds"}>
                    <div className={""}>
                    <div className={"col-wrapper-2"}>
                        <div className={"mb-col-2 t-col-1 d-col-1"}>
                            <div className={"home-big-yt"}>
                                <YoutubeEmbed 
                                    link={"https://www.youtube-nocookie.com/embed/_7aYo9Y9bh4"}
                                    title={"Video"}
                                    id={"home-yt-iframe"}
                                />
                            </div>
                        </div>
                        <div className={"mb-col-2 t-col-1 d-col-1"}>
                            <div className={"home-big-yt"}>
                                <YoutubeEmbed 
                                    link={"https://www.youtube-nocookie.com/embed/ITte6wG6nl0"}
                                    title={"Video"}
                                    id={"home-yt-iframe"}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={""}>
                    <HomeSocialIFrames />
                </div>
            </div>
        </>
    );
}

export default Home;