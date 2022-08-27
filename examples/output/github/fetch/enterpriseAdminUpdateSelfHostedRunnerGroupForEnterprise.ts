export interface EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody {
	/**
	 * Name of the runner group.
	 */
	name?: string;
	/**
	 * Visibility of a runner group. You can select all organizations or select individual organizations. Can be one of: `all` or `selected`
	 * @default "all"
	 */
	visibility?: 'all' | 'selected';
}

export interface EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams {
	body: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
}

export async function enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(
	props: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, body, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}`,
		{
			method: 'PATCH',
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
