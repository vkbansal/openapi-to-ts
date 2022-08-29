/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminDeleteScimGroupFromEnterprisePathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminDeleteScimGroupFromEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminDeleteScimGroupFromEnterprisePathParams {}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */
export async function enterpriseAdminDeleteScimGroupFromEnterprise(
	props: EnterpriseAdminDeleteScimGroupFromEnterpriseProps,
) {
	const { enterprise, scim_group_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/scim/v2/enterprises/${enterprise}/Groups/${scim_group_id}`,
		method: 'DELETE',
		...rest,
	});
}
