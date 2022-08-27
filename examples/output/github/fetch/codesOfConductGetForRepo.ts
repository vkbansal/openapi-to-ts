export interface CodesOfConductGetForRepoPathParams {
	owner: string;
	repo: string;
}

export interface CodesOfConductGetForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodesOfConductGetForRepoPathParams {}

export async function codesOfConductGetForRepo(props: CodesOfConductGetForRepoProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/community/code_of_conduct`, {
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
