import { useQuery } from '@tanstack/react-query';
export interface UseAppsGetAuthenticatedQueryProps {}

export function useAppsGetAuthenticatedQuery(props: UseAppsGetAuthenticatedQueryProps) {
	const {} = props;

	return useQuery(['apps/get-authenticated']);
}
