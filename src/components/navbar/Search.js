import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filterSlice/filterSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filters);
  const [input, setInput] = useState(search);
  const match = useMatch("/");
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      setInput("");
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
