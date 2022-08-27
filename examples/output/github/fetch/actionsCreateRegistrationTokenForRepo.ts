export interface ActionsCreateRegistrationTokenForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsCreateRegistrationTokenForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateRegistrationTokenForRepoPathParams {}

export async function actionsCreateRegistrationTokenForRepo(
	props: ActionsCreateRegistrationTokenForRepoProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runners/registration-token`, {
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
