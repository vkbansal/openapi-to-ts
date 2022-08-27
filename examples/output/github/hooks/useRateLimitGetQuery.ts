import { useQuery } from '@tanstack/react-query';
export interface UseRateLimitGetQueryProps {}

export function useRateLimitGetQuery(props: UseRateLimitGetQueryProps) {
	const {} = props;

	return useQuery(['rate-limit/get']);
}
