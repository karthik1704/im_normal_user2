import { useCallback, useEffect, useState } from "react";
import { PagedDiv } from "../../../Utils/js/Utils";
import { NEWS_AND_EVENTS_FILTER_URL, ROUTES } from "../../Globals";
import { BlogListComponent } from "../Components";
import PlacementSnapshots from "../PlacementSnapshots/PlacementSnapshots";
import RankingsPage from "../RankingsPage/RankingsPage";
import RecognitionsPage from "../RecognitionsPage/RecognitionsPage";
import Testimonials from "../Testimonials/Testimonials";
import "./PagedInfo.scss";

const PagedInfo = () => {

    const [pagedDivInstance, setPagedDivInstance] = useState<PagedDiv | null>(null);

    useEffect( () => {
        let _pagedDivInstance = new PagedDiv({_name: ".paged-info-slider", initialPos: 0, _fitToChild: true, fitWidthToParent: true});
        setPagedDivInstance(_pagedDivInstance);
        _pagedDivInstance.addWindowResizeListener();

        window.addEventListener("resize", _pagedDivInstance.fitHeightToCurrentPos);
        return () => {
            _pagedDivInstance.removeWindowResizeListener();
            window.removeEventListener("resize", _pagedDivInstance.fitHeightToCurrentPos);
        };
    }, []);

    const resizePagedOnImgLoad = useCallback(() => {
        if (!pagedDivInstance) return;
        pagedDivInstance.fitHeightToCurrentPos();
    }, [pagedDivInstance]);

    const gotoPage = useCallback((event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        if (!pagedDivInstance)
            return
        let activeElem = document.querySelector(".paged-info-slider-buttons .active");
        if (!activeElem) return;
        activeElem.classList.remove("active");
        let targetElem = event.target as HTMLButtonElement;
        targetElem.classList.add("active");
        pagedDivInstance.goto(index);
    }, [pagedDivInstance])

    return (
        <>
            <div className={"paged-info"}>
                <div className={"paged-info-slider-buttons"}>
                    <button className={"button bg-deep-orange-600  active"} onClick={(e) => gotoPage(e, 0)}>Ranking</button>
                    <button className={"button bg-deep-orange-600"} onClick={(e) => gotoPage(e, 1)}>Testimonials</button>
                    <button className={"button bg-deep-orange-600"} onClick={(e) => gotoPage(e, 2)}>Recognitions</button>
                    {/* <button className={"button bg-deep-orange-600"} onClick={(e) => gotoPage(e, 3)}>News & Events</button> */}
                    <button className={"button bg-deep-orange-600"} onClick={(e) => gotoPage(e, 4)}>Placement Snapshots</button>
                </div>
                <div className={"paged paged-info-slider"}>
                    <div>
                        <RankingsPage imgLoadCallback={resizePagedOnImgLoad}/>
                    </div>
                    <div>
                        <Testimonials />
                    </div>
                    <div>
                        <RecognitionsPage imgLoadCallback={resizePagedOnImgLoad}/>
                    </div>
                    <div>
                        <BlogListComponent
                            baseRoute={ROUTES["NEWS_AND_EVENTS"]}
                            defaultFetchUrl={NEWS_AND_EVENTS_FILTER_URL}
                            reqId={"news-and-events-homepage"}
                            type={"concise"}
                        />
                    </div>
                    <div>
                        <PlacementSnapshots />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PagedInfo;