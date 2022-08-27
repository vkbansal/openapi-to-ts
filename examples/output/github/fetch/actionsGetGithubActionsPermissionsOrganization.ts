/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
