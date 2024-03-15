import { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import { reset } from "../../features/filterSlice/filterSlice";

export default function Tags() {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  // const {  } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <section className="flex justify-around ">
        {tags?.length > 0 ? (
          <div className="max-w-7xl px-5 py-6 lg:px-0 flex flex-wrap gap-2 border-b overflow-y-auto">
            {tags.map((tag) => (
              <Tag key={tag.id} title={tag.title} />
            ))}
          </div>
        ) : null}
        <div className="px-5 py-6 border-b">
          <button
            className=" bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
}
