export interface ActionsGetAllowedActionsOrganizationPathParams {
	org: string;
}

export interface ActionsGetAllowedActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetAllowedActionsOrganizationPathParams {}

export async function actionsGetAllowedActionsOrganization(
	props: ActionsGetAllowedActionsOrganizationProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions/selected-actions`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
