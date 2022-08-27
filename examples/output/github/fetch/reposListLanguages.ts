export interface ReposListLanguagesPathParams {
	owner: string;
	repo: string;
}

export interface ReposListLanguagesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListLanguagesPathParams {}

export async function reposListLanguages(props: ReposListLanguagesProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/languages`, {
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
