export interface MigrationsCancelImportPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsCancelImportProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsCancelImportPathParams {}

export async function migrationsCancelImport(props: MigrationsCancelImportProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
