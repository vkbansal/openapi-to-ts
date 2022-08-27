import { useQuery } from '@tanstack/react-query';

export interface GetUserByNamePathParams {
	username: string;
}

export interface UseGetUserByNameQueryProps extends GetUserByNamePathParams {}

export function useGetUserByNameQuery(props: UseGetUserByNameQueryProps) {
	const { username } = props;

	return useQuery(['getUserByName', username]);
}
