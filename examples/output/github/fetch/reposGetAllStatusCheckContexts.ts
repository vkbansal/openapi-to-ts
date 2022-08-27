/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetAllStatusCheckContextsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetAllStatusCheckContextsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAllStatusCheckContextsPathParams {}

export async function reposGetAllStatusCheckContexts(props: ReposGetAllStatusCheckContextsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}