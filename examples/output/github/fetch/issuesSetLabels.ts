/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface IssuesSetLabelsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesSetLabelsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesSetLabelsPathParams {}

export async function issuesSetLabels(props: IssuesSetLabelsProps) {
	const { owner, repo, issue_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/labels`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
