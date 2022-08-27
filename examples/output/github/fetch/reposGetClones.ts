export interface ReposGetClonesQueryParams {
	/**
	 * @default "day"
	 */
	per?: '' | 'day' | 'week';
}

export interface ReposGetClonesPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetClonesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetClonesPathParams {
	queryParams: ReposGetClonesQueryParams;
}

export async function reposGetClones(props: ReposGetClonesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/traffic/clones`, {
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
