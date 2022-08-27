/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetTopReferrersPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetTopReferrersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetTopReferrersPathParams {}

export async function reposGetTopReferrers(props: ReposGetTopReferrersProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/traffic/popular/referrers`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}