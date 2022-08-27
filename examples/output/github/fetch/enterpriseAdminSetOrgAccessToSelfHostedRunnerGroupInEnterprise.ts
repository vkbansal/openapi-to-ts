export interface EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody {
	/**
	 * List of organization IDs that can access the runner group.
	 */
	selected_organization_ids: number[];
}

export interface EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	body: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;
}

export async function enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(
	props: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseProps,
) {
	const { enterprise, runner_group_id, body, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/organizations`,
		{
			method: 'PUT',
			body: JSON.stringify(body),
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
