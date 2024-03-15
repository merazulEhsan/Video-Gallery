import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { page } from "../../features/filterSlice/filterSlice";

export default function Pagination() {
  const [pageNum, setPageNum] = useState(0);
  const { videos } = useSelector((state) => state.videos);

  const pages = Math.ceil(videos.length / 8);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(page(pageNum));
  }, [dispatch, pageNum, pages]);

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end cursor-pointer">
        {[...Array(pages).keys()].map((page) => (
          <div
            onClick={() => {
              setPageNum(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            key={page}
            className={
              page === pageNum
                ? "bg-blue-600 text-white px-4 py-1 rounded-full"
                : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full"
            }
          >
            {page + 1}
          </div>
        ))}
        {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full">1</div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
          2
        </div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
          3
        </div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
          4
        </div> */}
      </div>
    </section>
  );
}
