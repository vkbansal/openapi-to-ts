export interface MigrationsGetLargeFilesPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsGetLargeFilesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsGetLargeFilesPathParams {}

export async function migrationsGetLargeFiles(props: MigrationsGetLargeFilesProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import/large_files`, {
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
