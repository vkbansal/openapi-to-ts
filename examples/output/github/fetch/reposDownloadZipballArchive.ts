export interface ReposDownloadZipballArchivePathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposDownloadZipballArchiveProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDownloadZipballArchivePathParams {}

export async function reposDownloadZipballArchive(props: ReposDownloadZipballArchiveProps) {
	const { owner, repo, ref, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/zipball/${ref}`, {
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
