import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";

export default function RelatedVideoList({ currentId, tags }) {
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentId }));
  }, [currentId, dispatch, tags]);

  let content = null;

  if (content) content = <Loading> </Loading>;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12"> No Videos Found </div>;
  }

  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {" "}
      {content}{" "}
    </div>
  );
}
