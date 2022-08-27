/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
	org_id: number;
}

export interface EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {}

export async function enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(
	props: EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseProps,
) {
	const { enterprise, runner_group_id, org_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/organizations/${org_id}`,
		{
			method: 'DELETE',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
