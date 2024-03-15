import {useDispatch} from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {likeUpdateVideo, UnlikelikeUpdateVideo} from "../../features/video/videoSlice";

export default function LikeUnlike({video}) {
    const {id, likes, unlikes} = video || {};

    const dispatch = useDispatch();

    const updateVideoLike = () => {
        let like = likes + 1;
        dispatch(likeUpdateVideo({id, like}));
    };

    const updateVideoUnlike = () => {
        const unlike = unlikes + 1;
        dispatch(UnlikelikeUpdateVideo({id, unlike}));
    };
    return (<div className="flex gap-10 w-48">
        <div onClick={
                (e) => updateVideoLike(e)
            }
            className="flex gap-1 cursor-pointer">
            <div className="shrink-0">
                <img className="w-5 block"
                    src={likeImage}
                    alt="Like"/>
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 "> {likes} </div>
        </div>
        <div onClick={updateVideoUnlike}
            className="flex gap-1 cursor-pointer">
            <div className="shrink-0">
                <img className="w-5 block"
                    src={unlikeImage}
                    alt="Unlike"/>
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 "> {unlikes} </div>
        </div>
    </div>);
}
