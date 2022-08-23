import { useQuery } from '@tanstack/react-query';

export interface UseLoginUserQueryProps {}

export function useLoginUserQuery(props: UseLoginUserQueryProps) {
	const {} = props;
	return useQuery(['loginUser']);
}
