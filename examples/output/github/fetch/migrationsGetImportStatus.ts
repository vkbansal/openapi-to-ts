export interface MigrationsGetImportStatusPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsGetImportStatusProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsGetImportStatusPathParams {}

export async function migrationsGetImportStatus(props: MigrationsGetImportStatusProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import`, {
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
