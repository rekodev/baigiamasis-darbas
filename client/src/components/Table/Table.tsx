import { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { IUser } from '../../types/user';
import LoadingSpinner from '../LoadingSpinner';
import Pagination from '../Pagination';
import TableHeading from '../TableHeader';
import TableRow from '../TableRow';
import { StyledTable, StyledTableContainer } from './style';

interface ITableProps {
  searchTerm: string;
}

const Table = ({ searchTerm }: ITableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(1);
  const [usersPerPage, _setUsersPerPage] = useState(10);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  const { users: userData, isLoading, isError, error } = useUsers();

  useEffect(() => {
    if (userData) {
      setFilteredUsers(
        userData.filter((user) =>
          `${user.firstName} ${user.lastName} ${user.email} ${user.age}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [userData, searchTerm]);

  if (isLoading) {
    return <LoadingSpinner $fullscreen />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPosts = filteredUsers?.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <StyledTableContainer>
        <StyledTable>
          <TableHeading />
          {currentPosts.length > 0 ? (
            currentPosts.map((user: IUser, idx: number) => (
              <TableRow
                _id={user._id}
                key={`user${idx + 1}`}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                age={user.age}
              />
            ))
          ) : (
            <p>Vartotojų pagal nurodytus parametrus nerasta...</p>
          )}
        </StyledTable>
      </StyledTableContainer>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers && filteredUsers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Table;
