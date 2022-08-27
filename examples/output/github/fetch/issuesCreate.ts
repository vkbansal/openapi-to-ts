/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface IssuesCreatePathParams {
	owner: string;
	repo: string;
}

export interface IssuesCreateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesCreatePathParams {}

export async function issuesCreate(props: IssuesCreateProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
