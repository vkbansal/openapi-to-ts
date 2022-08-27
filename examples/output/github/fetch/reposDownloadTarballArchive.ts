/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
