/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams {
	per_page?: number;
	page?: number;
}

export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	queryParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams;
}

export async function enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(
	props: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseProps,
) {
	const { enterprise, runner_group_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/organizations`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}