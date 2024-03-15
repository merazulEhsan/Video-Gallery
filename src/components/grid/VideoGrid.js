import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVideos } from "../../features/videos/videoSlice";
import Loading from "../ui/Loading";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search, author, pageNumber } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, author }));
  }, [author, dispatch, search, tags]);

  let content;

  if (content) content = <Loading></Loading>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos
      ?.slice(pageNumber * 8, pageNumber * 8 + 8)
      .map((video) => <VideoGridItem key={video.id} video={video} />);
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">No Videos Found</div>;
  }
  return (
    <section className="">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
}
