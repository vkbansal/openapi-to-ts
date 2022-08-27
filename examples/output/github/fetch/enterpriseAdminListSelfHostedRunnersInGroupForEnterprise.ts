/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams {
	per_page?: number;
	page?: number;
}

export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}

export async function enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(
	props: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/runners`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}