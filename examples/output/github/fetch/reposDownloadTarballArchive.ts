export interface ReposDownloadTarballArchivePathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposDownloadTarballArchiveProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDownloadTarballArchivePathParams {}

export async function reposDownloadTarballArchive(props: ReposDownloadTarballArchiveProps) {
	const { owner, repo, ref, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/tarball/${ref}`, {
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
