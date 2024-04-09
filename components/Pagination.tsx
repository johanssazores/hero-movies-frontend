import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setPage } from "../redux/actions/movieActions";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.movies
  );

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className="flex mt-2 pb-10 justify-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <div className="mr-2 border px-4 py-2 rounded-lg shadow-lg" key={i}>
          <button
            onClick={() => handlePageChange(i + 1)}
            className={`${currentPage === i + 1 && "font-bold"}`}
          >
            {i + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
