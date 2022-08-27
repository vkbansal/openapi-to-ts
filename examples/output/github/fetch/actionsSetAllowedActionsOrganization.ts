export interface ActionsSetAllowedActionsOrganizationPathParams {
	org: string;
}

export type ActionsSetAllowedActionsOrganizationRequestBody = SelectedActions;

export interface ActionsSetAllowedActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetAllowedActionsOrganizationPathParams {
	body: ActionsSetAllowedActionsOrganizationRequestBody;
}

export async function actionsSetAllowedActionsOrganization(
	props: ActionsSetAllowedActionsOrganizationProps,
) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions/selected-actions`, {
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
