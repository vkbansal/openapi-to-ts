/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams {
	excludedAttributes?: string;
}

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams {
	queryParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams;
	paramsSerializer?: (
		params: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams,
	) => string;
}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */
export async function enterpriseAdminGetProvisioningInformationForEnterpriseGroup(
	props: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupProps,
) {
	const { enterprise, scim_group_id, ...rest } = props;

	return _fetcher<
		unknown,
		EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams,
		unknown
	>({
		path: `/scim/v2/enterprises/${enterprise}/Groups/${scim_group_id}`,
		method: 'GET',
		...rest,
	});
}
