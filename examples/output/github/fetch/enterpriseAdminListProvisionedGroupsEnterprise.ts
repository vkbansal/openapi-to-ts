/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
	excludedAttributes?: string;
}

export interface EnterpriseAdminListProvisionedGroupsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
	queryParams: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams;
	paramsSerializer?: (params: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams) => string;
}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */
export async function enterpriseAdminListProvisionedGroupsEnterprise(
	props: EnterpriseAdminListProvisionedGroupsEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	return _fetcher<unknown, EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams, unknown>({
		path: `/scim/v2/enterprises/${enterprise}/Groups`,
		method: 'GET',
		...rest,
	});
}
