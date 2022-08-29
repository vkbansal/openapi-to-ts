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

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 */
export async function reposGetAllStatusCheckContexts(props: ReposGetAllStatusCheckContextsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
