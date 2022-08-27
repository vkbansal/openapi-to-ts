export interface EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody {
	/**
	 * Name of the runner group.
	 */
	name: string;
	/**
	 * List of runner IDs to add to the runner group.
	 */
	runners?: number[];
	/**
	 * List of organization IDs that can access the runner group.
	 */
	selected_organization_ids?: number[];
	/**
	 * Visibility of a runner group. You can select all organizations or select individual organization. Can be one of: `all` or `selected`
	 */
	visibility?: 'all' | 'selected';
}

export interface EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams {
	body: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody;
}

export async function enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(
	props: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runner-groups`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
