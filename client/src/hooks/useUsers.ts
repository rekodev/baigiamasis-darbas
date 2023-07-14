import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IUser } from '../types/user';

const fetchUsers = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/users`
  );
  return response.data;
};

const useUsers = () => {
  const queryInfo = useQuery<IUser[], Error>(['users'], fetchUsers);

  return {
    users: queryInfo.data,
    ...queryInfo,
  };
};

export default useUsers;
