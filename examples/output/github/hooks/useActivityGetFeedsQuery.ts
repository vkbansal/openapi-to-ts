import { useQuery } from '@tanstack/react-query';
export interface UseActivityGetFeedsQueryProps {}

export function useActivityGetFeedsQuery(props: UseActivityGetFeedsQueryProps) {
	const {} = props;

	return useQuery(['activity/get-feeds']);
}
