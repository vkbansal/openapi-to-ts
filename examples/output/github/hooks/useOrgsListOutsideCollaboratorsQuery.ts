import { useQuery } from '@tanstack/react-query';

export interface OrgsListOutsideCollaboratorsPathParams {
	org: string;
}

export interface OrgsListOutsideCollaboratorsQueryParams {
	/**
	 * @default "all"
	 */
	filter?: '2fa_disabled' | 'all';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListOutsideCollaboratorsQueryProps
	extends OrgsListOutsideCollaboratorsPathParams {
	queryParams: OrgsListOutsideCollaboratorsQueryParams;
}

export function useOrgsListOutsideCollaboratorsQuery(
	props: UseOrgsListOutsideCollaboratorsQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-outside-collaborators', org, queryParams]);
}
