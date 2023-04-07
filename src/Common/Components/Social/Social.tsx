import { useEffect, useState } from 'react';
import './Social.scss';

const Social = () => {

    const [counter, setCounter] = useState(0);
    // const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
    const [fbParsed, setFbParsed] = useState(false);

    //timer is used to try to reload fb iframe till fb sdk is downloaded (index.html)
    useEffect(() => {
        const timer = setInterval(() => {
            if (!fbParsed) {
                if (FB) {
                    FB.XFBML.parse();
                    setFbParsed(true)
                }
            }
            setCounter(counter + 1);
        }, 3000);
        return () => clearInterval(timer);
    }, [counter, fbParsed]);

    return (
        <div className={"social center"}>
            <div id="fb-root"></div>
            <div className={"col-wrapper-2"}>
                <div className={"mb-col-2 t-col-1 d-col-1"}>
                    <div className={"gmap-iframe-div t-align-center"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15557.532864883988!2d77.5501132!3d12.8830623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa56f57e07c827416!2sMY%20CAR%20Multi%20Brand!5e0!3m2!1sen!2sin!4v1610551347925!5m2!1sen!2sin" className={"gmap-iframe"} frameBorder="" style={{border: 0}} allowFullScreen={false} aria-hidden="false" tabIndex={0} title={"My Car"}></iframe>
                    </div>
                </div>
                <div className={"mb-col-2 t-col-1 d-col-1"}>
                    <div className={"fb-iframe-div t-align-center"}>
                        <div data-lazy="true" className="fb-page" data-href="https://www.facebook.com/Lorem-Ipsum-1856521724431206/" data-tabs="timeline" data-width="552" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Lorem-Ipsum-1856521724431206/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Lorem-Ipsum-1856521724431206/">MY CAR Multibrand</a></blockquote></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social;