import { ProfilePicHolderMan } from "../../Assets/Assets";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import "./SingleBlog.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Comments, QuillNonEdit } from "../../Common/Components/Components";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { IBlog } from "../../Common/Api/BlogApi/Interfaces/Blog";
import { getBlog, reset, resetGetState } from "../../Store/Slices/Blog/BlogSlice";
import { BLOG_URL, ROUTES } from "../../Common/Globals";
import { useHistory, useParams } from "react-router";

interface SingleBlogInfoParams {
    username: string,
    profileImg: string, alt?: string, profileImgWebp?: string, w?: string, h?: string,
    date: string,
}
const SingleBlogInfo = ({username, date, profileImg, alt, profileImgWebp, w, h}: SingleBlogInfoParams) => {
    return (
        <>
            <div className={"single-blog-info-div "}>
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

export const SingleBlog = () => {
    /** TODO: use this date format: Dec 30, 2020 instead of 12-30-2020 */

    // const date = "Dec 30, 2020";
    const profileImg = ProfilePicHolderMan;
    // const title = "Lorem ipsum dolor sit amet";

    const { blogId, blogSlug } = useParams<{blogId: string, blogSlug: string}>();
    const blog = useSelector((state: {blog: IBlog}) => state.blog);
    const dispatch = useDispatch();
    const history = useHistory();

    // reset blog on both component-mount and unmount
    useEffect(() => {
        dispatch(reset());
        dispatch(getBlog({url: BLOG_URL + blogId + "/"}))
        return () => {
            dispatch(reset())
        };
    }, [dispatch, blogId]);

    useEffect(() => {
        if (blog.request_states.get.fulfilled) {
            dispatch(resetGetState());
            if (blogSlug !== blog.slug || !blog.active) {
                history.replace(ROUTES["NOT_FOUND"]);
            }
        }
    }, [history, dispatch, blog.request_states.get.fulfilled, blog.slug, blogSlug, blog.active])

    return (
        <>
            <Helmet>
                <title>{blog.title} - AIMS IBS</title>
                <meta name="description" content={blog.short_content}/>
            </Helmet>

            <div className={"single-blog"}>
                <h1 className={"title h5"}>{blog.title}</h1>

                <div className={"title-image-div"}>
                    <img src={blog.title_image.image} alt={"Bolg"} className={"single-blog-image"}></img>
                </div>

                <SingleBlogInfo date={blog.publish_date} username={blog.poster.username} profileImg={profileImg}/>
                <div className={"quill-content"}>
                    <QuillNonEdit quillText={blog.content} />
                </div>

                <div className={"comments"}>
                    <Comments blogId={blogId} blogUrl={blog.url}/>
                </div>
            </div>
        </>
    )
}

export default SingleBlog;