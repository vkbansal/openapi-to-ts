import { useQuery } from '@tanstack/react-query';

export interface UseGetUserByNameQueryProps {
	username: string;
}

export function useGetUserByNameQuery(props: UseGetUserByNameQueryProps) {
	const { username } = props;
	return useQuery(['getUserByName', username]);
}
