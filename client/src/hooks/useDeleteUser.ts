import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

const useDeleteUser = (): UseMutationResult<any, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation(
    (userId: string) =>
      axios.delete(`${import.meta.env.VITE_BASE_URL}/api/users/${userId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },
    }
  );
};

export default useDeleteUser;
