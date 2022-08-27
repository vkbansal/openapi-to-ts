export interface MigrationsGetCommitAuthorsQueryParams {
	since?: number;
}

export interface MigrationsGetCommitAuthorsPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsGetCommitAuthorsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsGetCommitAuthorsPathParams {
	queryParams: MigrationsGetCommitAuthorsQueryParams;
}

export async function migrationsGetCommitAuthors(props: MigrationsGetCommitAuthorsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import/authors`, {
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
