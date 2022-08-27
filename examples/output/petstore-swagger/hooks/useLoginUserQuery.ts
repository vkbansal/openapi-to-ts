import { useQuery } from '@tanstack/react-query';

export interface LoginUserQueryParams {
	username: string;
	password: string;
}

export interface UseLoginUserQueryProps {
	queryParams: LoginUserQueryParams;
}

export function useLoginUserQuery(props: UseLoginUserQueryProps) {
	const { queryParams } = props;

	return useQuery(['loginUser', queryParams]);
}
