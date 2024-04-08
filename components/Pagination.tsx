// components/Pagination.tsx
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
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} onClick={() => handlePageChange(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
