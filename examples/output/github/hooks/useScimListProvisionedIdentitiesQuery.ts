import { useQuery } from '@tanstack/react-query';

export interface ScimListProvisionedIdentitiesPathParams {
	org: string;
}

export interface ScimListProvisionedIdentitiesQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
}

export interface UseScimListProvisionedIdentitiesQueryProps
	extends ScimListProvisionedIdentitiesPathParams {
	queryParams: ScimListProvisionedIdentitiesQueryParams;
}

export function useScimListProvisionedIdentitiesQuery(
	props: UseScimListProvisionedIdentitiesQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery(['scim/list-provisioned-identities', org, queryParams]);
}
