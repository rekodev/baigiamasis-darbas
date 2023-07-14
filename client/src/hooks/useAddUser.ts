import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { IUser } from '../types/user';

export const useAddUser = (): UseMutationResult<any, Error, IUser> => {
  const queryClient = useQueryClient();

  return useMutation(
    (user: IUser) =>
      axios.post(`${import.meta.env.VITE_BASE_URL}/api/users`, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },

      onError: (error: AxiosError) => {
        if (error.response) {
          console.error(error.response.data);
        } else if (error.request) {
          console.error('No response was received', error.message);
        } else {
          console.error('Error', error.message);
        }
      },
    }
  );
};
