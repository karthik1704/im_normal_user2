import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICommentList } from "../../../Common/Api/CommentApi/Interfaces/Comment";
import { COMMENT_URL } from "../../../Common/Globals";
import { getCommentList } from "../../../Store/Slices/CommentList/CommentListGet";
import { reset } from "../../../Store/Slices/CommentList/CommentListSlice";
import { CommentListItem } from "./CommentListItem";
import "./Comments.scss";
import { NewComment } from "./NewComment";

export interface IComments {
    blogId: string, blogUrl: string
}
export const Comments = ({blogId, blogUrl}: IComments) => {
    const dispatch = useDispatch();
    const commentList = useSelector((state: {commentList: ICommentList}) => state.commentList);
    const loadMoreBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        dispatch(getCommentList({url: COMMENT_URL["FILTER_BLOG"]({blogId: blogId})}));
        return () => {
            dispatch(reset());
        }
    }, [dispatch, blogId]);

    useEffect(() => {
        if(!loadMoreBtnRef.current) return;

        if (!commentList.next) {
            loadMoreBtnRef.current.disabled = true;
            loadMoreBtnRef.current.classList.remove("bg-blue-gray-100");
        }
        else {
            loadMoreBtnRef.current.disabled = false;
            loadMoreBtnRef.current.classList.add("bg-blue-gray-100");
        }
    }, [commentList.next]);

    const handleLoadClick = useCallback(() => {
        if (commentList.next)
            dispatch(getCommentList({url: commentList.next}))
    }, [dispatch, commentList.next]);

    const CommentListItemJSX = useMemo(() => {
        return commentList.results.map((c, i) => {
            return (
                <CommentListItem {...c} key={c.id} index={i}/>
            )
        });
    }, [commentList.results])

    return (
        <>
            <div className={"comments card-panel"}>
                <div>
                    <NewComment blogUrl={blogUrl}/>
                    <div className={"col-wrapper-24"}>
                        <div className={"col-24"}>
                            <div> 
                                <h6 className={"t-align-center"}>COMMENTS</h6>
                                {CommentListItemJSX}
                            </div>
                            <div className={"t-align-center"}>
                                <button ref={loadMoreBtnRef} onClick={handleLoadClick} type={"button"} className={"button bg-blue-gray-100"}>LOAD MORE</button>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments;