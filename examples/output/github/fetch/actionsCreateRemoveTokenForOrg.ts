export interface ActionsCreateRemoveTokenForOrgPathParams {
	org: string;
}

export interface ActionsCreateRemoveTokenForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateRemoveTokenForOrgPathParams {}

export async function actionsCreateRemoveTokenForOrg(props: ActionsCreateRemoveTokenForOrgProps) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runners/remove-token`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
