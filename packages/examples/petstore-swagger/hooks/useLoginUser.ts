import { useQuery } from '@tanstack/react-query';
export function useLoginUser() {
	return useQuery(['loginUser']);
}
