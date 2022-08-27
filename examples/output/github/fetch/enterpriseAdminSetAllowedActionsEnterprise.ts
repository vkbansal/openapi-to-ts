export interface EnterpriseAdminSetAllowedActionsEnterprisePathParams {
	enterprise: string;
}

export type EnterpriseAdminSetAllowedActionsEnterpriseRequestBody = SelectedActions;

export interface EnterpriseAdminSetAllowedActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetAllowedActionsEnterprisePathParams {
	body: EnterpriseAdminSetAllowedActionsEnterpriseRequestBody;
}

export async function enterpriseAdminSetAllowedActionsEnterprise(
	props: EnterpriseAdminSetAllowedActionsEnterpriseProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions/selected-actions`, {
		method: 'PUT',
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
