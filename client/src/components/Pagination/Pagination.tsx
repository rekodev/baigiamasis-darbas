import { StyledPagination, StyledPaginationPageNumber } from './style';

interface IPagination {
  usersPerPage: number;
  totalUsers: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers: number[] = [];

  if (totalUsers) {
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  // Ellipsis (...)
  const ellipsis = <li style={{ pointerEvents: 'none' }}>...</li>;
  let ellipsisLeft = false;
  let ellipsisRight = false;

  return (
    <StyledPagination>
      <ul>
        {pageNumbers.map((number, idx) => {
          if (
            idx === 0 ||
            idx === pageNumbers.length - 1 ||
            idx === currentPage ||
            idx === currentPage - 1 ||
            idx === currentPage - 2
          ) {
            return (
              <StyledPaginationPageNumber
                $active={idx === currentPage - 1}
                key={number}
              >
                <a onClick={() => paginate(number)} href='#'>
                  {number}
                </a>
              </StyledPaginationPageNumber>
            );
          } else if (number === 2 && currentPage > 3 && !ellipsisLeft) {
            ellipsisLeft = true;
            return ellipsis;
          } else if (
            number === pageNumbers.length - 1 &&
            currentPage < pageNumbers.length - 2 &&
            !ellipsisRight
          ) {
            ellipsisRight = true;
            return ellipsis;
          }
        })}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
