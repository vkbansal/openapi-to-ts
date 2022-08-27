export interface ActionsGetGithubActionsPermissionsOrganizationPathParams {
	org: string;
}

export interface ActionsGetGithubActionsPermissionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetGithubActionsPermissionsOrganizationPathParams {}

export async function actionsGetGithubActionsPermissionsOrganization(
	props: ActionsGetGithubActionsPermissionsOrganizationProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions`, {
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
