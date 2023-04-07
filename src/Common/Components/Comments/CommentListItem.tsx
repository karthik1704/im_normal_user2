import { faArrowAltCircleDown, faArrowAltCircleUp, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICommentData, ICommentList } from "../../../Common/Api/CommentApi/Interfaces/Comment";
import { patchComment } from "../../../Store/Slices/CommentList/CommentPatch";
import { COMMENT_URL } from "../../Globals";

export const CommentListItem = ({poster, content, votes, url, index}: ICommentData & {index: number}) => {
    const [isUpVoting, setIsUpVoting] = useState(false);
    const [isDownVoting, setIsDownVoting] = useState(false);
    const [_votes, setVotes] = useState(votes);
    const dispatch = useDispatch();
    const commentList = useSelector((state: {commentList: ICommentList}) => state.commentList);

    const upvoteRef = useRef<HTMLButtonElement>(null);
    const downvoteRef = useRef<HTMLButtonElement>(null);

    const handleVote = ({upvote, downvote}: {upvote?: boolean, downvote?: boolean}) => {
        if (isUpVoting || isDownVoting || commentList.request_states.patch.pending) return;

        if (upvote) {
            setIsUpVoting(true);
            dispatch(patchComment({idInState: index, url: COMMENT_URL["UPVOTE_URL"]({url: url})}));
        }
        else if (downvote) {
            setIsDownVoting(true);
            dispatch(patchComment({idInState: index, url: COMMENT_URL["DOWNVOTE_URL"]({url: url})}));
        }
    }

    const disableBtns = () => {
        if (!upvoteRef.current || !downvoteRef.current) return;
        upvoteRef.current.disabled = true;
        downvoteRef.current.disabled = true;
    }

    const updateVotes = ({type}: {type: "increment" | "decrement"}) => {
        setVotes(p => {
            if (p !== undefined) {
                if (type === "increment") {
                    setIsUpVoting(false);
                    return p + 1;
                }
                else if (type === "decrement") {
                    setIsDownVoting(false);
                    return p - 1;
                }
            }
            return p;
        });
    }

    useEffect(() => {
        if (commentList.request_states.patch.fulfilled) {
            if (isUpVoting) {
                updateVotes({type: "increment"});

                if (!upvoteRef.current) return;
                upvoteRef.current.classList.add("active");

                disableBtns();
            }
            else if (isDownVoting) {
                updateVotes({type: "decrement"});

                if (!downvoteRef.current) return;
                downvoteRef.current.classList.add("active");

                disableBtns();
            }
        }
    }, [commentList.request_states.patch.fulfilled, isUpVoting, isDownVoting]);

    useEffect(() => {
        if (commentList.request_states.patch.rejected) {
            if (isUpVoting) {
                setIsUpVoting(false);
            }
            if (isDownVoting) {
                setIsDownVoting(false);
            }
        }
    }, [commentList.request_states.patch.rejected, isUpVoting, isDownVoting]);

    return (
        <>
            <div className={"comment-list-item"}>
                <div className={"poster-name"}>
                    <p><span><FontAwesomeIcon icon={faUserAlt} className={"svg"}/></span> {poster}</p>
                </div>
                <hr className={"divider-hr"} />
                <div className={"poster-comment"}>
                    <p>{content}</p>
                </div>
                <div className={"poster-votes"}>
                    <div className={""}><p className={"votes"}>{_votes} votes</p></div>
                    <div className={"d"}>
                        <div className={"divider-vertical-w"}>
                            <div className="divider-vertical"></div>
                        </div>
                    </div>
                    <div className={""}>
                        <button ref={upvoteRef} type={"button"} onClick={() => handleVote({upvote: true})} className={`button votes up`}><FontAwesomeIcon icon={faArrowAltCircleUp}/></button>
                    </div>
                    <div className={"d"}>
                        <div className={"divider-vertical-w"}>
                            <div className="divider-vertical"></div>
                        </div>
                    </div>
                    <div className={""}>
                        <button ref={downvoteRef} type={"button"} onClick={() => handleVote({downvote: true})} className={`button votes down`}><FontAwesomeIcon icon={faArrowAltCircleDown}/></button>
                    </div>
                </div>
            </div>
        </>
    )
}