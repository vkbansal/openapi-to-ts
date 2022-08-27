export interface ActionsListRunnerApplicationsForOrgPathParams {
	org: string;
}

export interface ActionsListRunnerApplicationsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRunnerApplicationsForOrgPathParams {}

export async function actionsListRunnerApplicationsForOrg(
	props: ActionsListRunnerApplicationsForOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runners/downloads`, {
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
