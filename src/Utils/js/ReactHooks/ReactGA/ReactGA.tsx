import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router";

const usePageTracking = ({trackingCode}: {trackingCode: string}) => {
    const location = useLocation();
    const [isInit, setIsInit] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(trackingCode);
        }
        setIsInit(true);
    }, [trackingCode]);

    useEffect(() => {
        if (isInit) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [location, isInit]);
}

export {usePageTracking}