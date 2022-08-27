/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposCreateOrUpdateFileContentsPathParams {
	owner: string;
	repo: string;
	path: string;
}

export interface ReposCreateOrUpdateFileContentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateOrUpdateFileContentsPathParams {}

export async function reposCreateOrUpdateFileContents(props: ReposCreateOrUpdateFileContentsProps) {
	const { owner, repo, path, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/contents/${path}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}