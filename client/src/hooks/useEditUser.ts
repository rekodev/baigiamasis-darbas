import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import { IUser } from '../types/user';

export const useEditUser = (): UseMutationResult<any, Error, IUser> => {
  const queryClient = useQueryClient();

  return useMutation(
    (user: IUser) =>
      axios.put(`${import.meta.env.VITE_BASE_URL}/api/users/${user._id}`, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },
    }
  );
};
