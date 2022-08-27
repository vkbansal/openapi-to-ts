export interface EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
	runner_id: number;
}

export interface EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams {}

export async function enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(
	props: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, runner_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/runners/${runner_id}`,
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
