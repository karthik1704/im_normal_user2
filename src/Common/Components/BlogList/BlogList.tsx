import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ProfilePicHolderMan } from "../../../Assets/Assets";
import { getBlogList } from "../../../Store/Slices/BlogList/BlogListGet";
import { reset } from "../../../Store/Slices/BlogList/BlogListSlice";
import { IBlogList } from "../../Api/BlogApi/Interfaces/Blog";
import { ROUTES } from "../../Globals";
import "./BlogList.scss";

interface BlogInfoParams {
    username: string,
    profileImg: string, alt?: string, profileImgWebp?: string, w?: string, h?: string,
    date: string,
}
const BlogInfo = ({username, date, profileImg, alt, profileImgWebp, w, h}: BlogInfoParams) => {
    return (
        <>
            <div className={"blog-info-div "}>
                <div className={"author-profile-pic"}>
                    <picture>
                        {profileImgWebp && <source type={"image/webp"} srcSet={profileImgWebp}/>}
                        <img
                            src={profileImg} alt={alt?alt:"profile"}
                            width={w} height={h}
                        />
                    </picture>
                </div>
                <div>    
                    <div className={"author-username"}>
                        <h6>{username}</h6>
                    </div>
                    <div className={"date"}>
                        <p>
                            <FontAwesomeIcon icon={faCalendarAlt} className={""}/>
                            <span> {date}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

interface BlogListCardParams {
    img: string, alt?: string, imgWebp?: string, w?: string, h?: string,
    title: string,
    shortText: string,
    uploaderProfilePic: string,
    uploadDate: string,
    uploaderUsername: string,
    link: string,
}

const BlogListCard = ({img, alt, imgWebp, w, h, title, shortText, uploaderUsername, uploadDate, uploaderProfilePic, link}: BlogListCardParams) => {

    const history = useHistory();

    const onClick = useCallback(() => {
        history.push(link);
    }, [history, link])

    return (
        <>
            <div className={"blog-list-card card-panel"} onClick={onClick}>
                <div className={"image-div"}>
                    <picture>
                        {imgWebp && <source type={"image/webp"} srcSet={imgWebp}/>}
                        <img
                            src={img} alt={alt?alt:title}
                            width={w} height={h}    
                        />
                    </picture>
                </div>
                <div className={"content-div"}>
                    <h6 className={"title"}><Link to={link}>{title}</Link></h6>
                    <p className={"short-text"}>{shortText}</p>
                    <BlogInfo date={uploadDate} username={uploaderUsername} profileImg={uploaderProfilePic} />
                </div>
            </div>
        </>
    )
}

export interface IBlogListComponent {
    baseRoute: string,
    reqId: string,
    defaultFetchUrl: string,
    type: "concise" | "normal"
}
export const BlogListComponent = ({baseRoute, reqId, defaultFetchUrl, type}: IBlogListComponent) => {

    const dispatch = useDispatch();
    const blogList = useSelector((state: {blogList: IBlogList}) => state.blogList);
    const loadMoreBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (reqId !== blogList.request_states.get.req_id) {
            dispatch(reset());
        }
    }, [dispatch, reqId, blogList.request_states.get.req_id]);

    useEffect(() => {
        if (blogList.results.length === 0
            && !blogList.request_states.get.pending
            && !blogList.request_states.get.fulfilled
            && !blogList.request_states.get.rejected) {
            dispatch(getBlogList({url: defaultFetchUrl, req_id: reqId}));
        }
    }, [dispatch, blogList.request_states.get, blogList.results.length, defaultFetchUrl, reqId]);

    useEffect(() => {
        if(!loadMoreBtnRef.current) return;

        if (!blogList.next) {
            loadMoreBtnRef.current.disabled = true;
            loadMoreBtnRef.current.classList.remove("bg-blue-gray-100");
        }
        else {
            loadMoreBtnRef.current.disabled = false;
            loadMoreBtnRef.current.classList.add("bg-blue-gray-100");
        }
    }, [blogList.next]);

    const handleLoadClick = useCallback(() => {
        if (blogList.next)
            dispatch(getBlogList({url: blogList.next, req_id: reqId}))
    }, [dispatch, blogList.next, reqId]);

    const BlogListItemJSX = useMemo(() => {
        return blogList.results.map((b, i) => {
            return (
                <div className={"mb-col-24 t-col-24 d-col-12"} key={b.id}>
                    <BlogListCard
                        img={b.title_image.thumbnail_200}
                        link={baseRoute + "/" + b.id + "/" + b.slug}
                        shortText={b.content}
                        title={b.title}
                        uploadDate={b.publish_date}
                        uploaderProfilePic={ProfilePicHolderMan}
                        uploaderUsername={b.poster.username}
                    />
                </div>
            )
        })
    }, [blogList.results, baseRoute])

    return (
        <>
            <div className={"blog-list-component"}>
                <div className={"col-wrapper-24"}>
                    {BlogListItemJSX}
                </div>
                <div className={"t-align-center"}>
                    {
                        type === "normal" && <button ref={loadMoreBtnRef} onClick={handleLoadClick} type={"button"} className={"button bg-blue-gray-100"}>LOAD MORE</button>
                    }
                    {
                        type === "concise" && <Link to={ROUTES["NEWS_AND_EVENTS"]} className={"button bg-blue-gray-100"}>SEE MORE</Link>
                    }         
                </div>
            </div>
        </>
    )
}

export default BlogListComponent;