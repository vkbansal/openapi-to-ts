import { useQuery } from '@tanstack/react-query';

export interface UsersGetByUsernamePathParams {
	username: string;
}

export interface UseUsersGetByUsernameQueryProps extends UsersGetByUsernamePathParams {}

export function useUsersGetByUsernameQuery(props: UseUsersGetByUsernameQueryProps) {
	const { username } = props;

	return useQuery(['users/get-by-username', username]);
}
