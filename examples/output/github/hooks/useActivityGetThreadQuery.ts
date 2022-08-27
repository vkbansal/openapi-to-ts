import { useQuery } from '@tanstack/react-query';

export interface ActivityGetThreadPathParams {
	thread_id: number;
}

export interface UseActivityGetThreadQueryProps extends ActivityGetThreadPathParams {}

export function useActivityGetThreadQuery(props: UseActivityGetThreadQueryProps) {
	const { thread_id } = props;

	return useQuery(['activity/get-thread', thread_id]);
}
