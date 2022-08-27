export interface EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
	org_id: number;
}

export interface EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {}

export async function enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(
	props: EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseProps,
) {
	const { enterprise, runner_group_id, org_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/organizations/${org_id}`,
		{
			method: 'PUT',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
