import ReactPaginate from "react-paginate";

export type PaginationProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

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
