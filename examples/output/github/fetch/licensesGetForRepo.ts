export interface LicensesGetForRepoPathParams {
	owner: string;
	repo: string;
}

export interface LicensesGetForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		LicensesGetForRepoPathParams {}

export async function licensesGetForRepo(props: LicensesGetForRepoProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/license`, {
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
