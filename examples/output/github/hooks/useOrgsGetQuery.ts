import { useQuery } from '@tanstack/react-query';

export interface OrgsGetPathParams {
	org: string;
}

export interface UseOrgsGetQueryProps extends OrgsGetPathParams {}

export function useOrgsGetQuery(props: UseOrgsGetQueryProps) {
	const { org } = props;

	return useQuery(['orgs/get', org]);
}
