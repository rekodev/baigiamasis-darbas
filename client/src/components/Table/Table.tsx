import TableHeading from '../TableHeading';
import { StyledTable, StyledTableContainer } from './style';
import TableRow from '../TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../../types/user';
import LoadingSpinner from '../LoadingSpinner';

const Table = () => {
  const [userData, setUserData] = useState<null | IUser[]>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const fetchedUsers = await axios.get('http://localhost:5000/api/users');

      setUserData(fetchedUsers.data);
      setIsLoading(false);
    };

    fetchAllUsers();
  }, []);

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <StyledTableContainer>
      <StyledTable>
        <TableHeading />
        {userData
          ? userData.map((user: IUser, idx: number) => (
              <TableRow
                key={`user${idx + 1}`}
                name={user.vardas}
                lastName={user.pavarde}
                email={user.elPastas}
                age={user.amzius}
              />
            ))
          : ''}
      </StyledTable>
    </StyledTableContainer>
  );
};

export default Table;
