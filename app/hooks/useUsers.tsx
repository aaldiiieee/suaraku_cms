import { useQuery } from '@tanstack/react-query';
import { getAllUsers, getUserById } from 'app/services/users.service';

export const useUsers = () => {
  const useAllUsers = () => {
    const { data, isLoading } = useQuery({
      queryKey: ['users'],
      queryFn: () => getAllUsers(),
      staleTime: 1000 * 60 * 5 // 5 minutes
    });

    return {
      users: data,
      isLoading
    };
  }

  const useUserById = (id: string) => {
    const { data, isLoading } = useQuery({
      queryKey: ['user', id],
      queryFn: () => getUserById(id),
      staleTime: 1000 * 60 * 5 // 5 minutes
    });

    return {
      user: data,
      isLoading
    };
  };

  return {
    useAllUsers,
    useUserById
  }
};
