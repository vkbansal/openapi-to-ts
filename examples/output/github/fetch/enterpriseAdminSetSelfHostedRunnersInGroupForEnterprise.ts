export interface EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody {
	/**
	 * List of runner IDs to add to the runner group.
	 */
	runners: number[];
}

export interface EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams {
	body: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody;
}

export async function enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(
	props: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, body, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/runners`,
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
