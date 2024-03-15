import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { author } from "../../features/filterSlice/filterSlice";
export default function VideoGridItem({ video }) {
  const dispatch = useDispatch();
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`videos/${video.id}`}>
            <img
              src={video?.thumbnail}
              className="w-full h-auto"
              alt={video?.title}
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {video?.duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to={`videos/${video.id}`} className="shrink-0">
            <img
              src={video?.avatar}
              className="rounded-full h-6 w-6"
              alt={video?.author}
            />
          </Link>

          <div clas="flex flex-col">
            <a href="video.html">
              <p className="text-slate-900 text-sm font-semibold">
                {video?.title}
              </p>
            </a>
            <p
              className="text-gray-400 text-xs mt-2 hover:text-gray-600 cursor-pointer"
              onClick={() => dispatch(author(video?.author))}
            >
              {video?.author}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {video?.views} views . {video?.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
