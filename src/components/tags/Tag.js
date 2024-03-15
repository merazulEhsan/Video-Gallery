import { useDispatch, useSelector } from "react-redux";
import {
  tagsRemove,
  tagsSelected,
} from "../../features/filterSlice/filterSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { tags: selectedTag } = useSelector((state) => state.filters);

  const isSelected = selectedTag.includes(title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagsRemove(title));
    } else {
      dispatch(tagsSelected(title));
    }
  };

  return (
    <div className={style} onClick={handleSelect}>
      {title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
