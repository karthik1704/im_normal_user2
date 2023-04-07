import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ICommentList } from "../../../Common/Api/CommentApi/Interfaces/Comment"
import { postComment, resetReqState } from "../../../Store/Slices/CommentList/CommentListSlice"

export const NewComment = ({blogUrl}: {blogUrl: string}) => {
    const DEFAULT_POSTER = "";
    const DEFAULT_CONTENT = "";

    const dispatch = useDispatch();
    const commentList = useSelector((state: {commentList: ICommentList}) => state.commentList);

    const [poster, setPoster] = useState(DEFAULT_POSTER);
    const [content, setContent] = useState(DEFAULT_CONTENT);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (commentList.request_states.post.pending === true) {
            return;
        }

        dispatch(resetReqState({post: true, validation_errors: true, error_description: true}));
        dispatch(postComment({
            blog: blogUrl,
            content: content,
            poster: poster,
        }));
    }

    useEffect(() => {
        return () => {
            dispatch(resetReqState({post: true, validation_errors: true, error_description: true}));
        }
    }, [dispatch]);

    useEffect(() => {
        if (commentList.request_states.post.fulfilled) {
            setPoster(DEFAULT_POSTER);
            setContent(DEFAULT_CONTENT);
        }
    }, [commentList.request_states.post.fulfilled]);

    return (
        <>
            <div className={"new-comment"}>
                <div className={"form-div center"}>
                    <div className="title t-align-center">
                        <h6>POST A NEW COMMENT</h6>
                    </div>
                    <form className={""} onSubmit={handleSubmit}>
                        { commentList.request_states.post.fulfilled && <p className={"submit-notif"}>We are happy to hear from you!</p> }
                        { commentList.request_states.post.pending && <p className={"submit-notif"}>Posting...</p> }
                        { commentList.request_states.post.rejected && <p className={"submit-notif failed"}>Failed</p> }
                        <div className={"error-div"}>
                            {
                                commentList.validation_errors?.poster.map((errorMsg, index) => {
                                    return (
                                        <p 
                                            key={"name_validation_errors"+index}
                                            className="t-align-center red-a700"
                                        >{errorMsg}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="input-div icon">
                            <input 
                                id="poster"
                                className="border-white " 
                                type="text" 
                                placeholder=" " 
                                value={poster}
                                onChange={e => { e.preventDefault(); setPoster(e.target.value); }}
                                required
                            />
                            <label htmlFor="poster">Name</label>
                            <i className="material-icons">perm_identity</i>
                        </div>
                        <div className={"error-div"}>
                            {
                                commentList.validation_errors?.content.map((errorMsg, index) => {
                                    return (
                                        <p key={"msg_validation_errors"+index}>{errorMsg}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="input-div icon textarea">
                            <textarea 
                                className=""
                                id="comment"
                                placeholder=" "
                                value={content}
                                onChange={e => { e.preventDefault(); setContent(e.target.value); }}
                                rows={5}
                                required
                            />
                            <label htmlFor="comment">Comment</label>
                            <i className="material-icons">message</i>
                        </div>
                        <div className="">
                            <button className="button" type="submit">POST</button>
                        </div>     
                    </form>
                </div>
            </div>
        </>
    )
}