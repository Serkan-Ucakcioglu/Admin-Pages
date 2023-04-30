import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectedFormData } from "../../../Features/loginSlice";
import Home from "./Home";
import About from "./About";

function Section() {
  const formData = useSelector(selectedFormData);
  const [page, setPage] = useState(0);

  const pages = {
    0: <Home />,
    1: <About />,
  };

  const prev = () => {
    if (page > 0) {
      setPage((page) => page - 1);
    }
  };

  const next = () => {
    if (page < 1) {
      setPage((page) => page + 1);
    }
  };

  return (
    <div>
      {pages[page]}
      <button
        className={`bg-blue-500 p-1 rounded hover:bg-blue-700 text-white ${
          page == 0 ? "opacity-50" : ""
        }`}
        onClick={prev}
      >
        prev
      </button>
      <button
        className={`bg-blue-500 p-1 rounded hover:bg-blue-700 text-white ${
          page == 1 ? "opacity-50" : ""
        }`}
        onClick={next}
      >
        next
      </button>
    </div>
  );
}

export default Section;
