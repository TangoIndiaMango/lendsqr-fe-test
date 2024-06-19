import ReactPaginate from "react-paginate";
import { PaginationProps } from "../../utils/types";



const Pagination = ({ pageCount, handlePageClick }: PaginationProps) => {
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="arrow"
      nextClassName="arrow"
      breakLabel="..."
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
