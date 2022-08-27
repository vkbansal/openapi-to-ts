export interface ActionsCreateRegistrationTokenForOrgPathParams {
	org: string;
}

export interface ActionsCreateRegistrationTokenForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateRegistrationTokenForOrgPathParams {}

export async function actionsCreateRegistrationTokenForOrg(
	props: ActionsCreateRegistrationTokenForOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runners/registration-token`, {
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
