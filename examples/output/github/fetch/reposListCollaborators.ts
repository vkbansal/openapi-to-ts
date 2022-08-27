export interface ReposListCollaboratorsQueryParams {
	/**
	 * @default "all"
	 */
	affiliation?: 'all' | 'direct' | 'outside';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListCollaboratorsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCollaboratorsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListCollaboratorsPathParams {
	queryParams: ReposListCollaboratorsQueryParams;
}

export async function reposListCollaborators(props: ReposListCollaboratorsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/collaborators`, {
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
