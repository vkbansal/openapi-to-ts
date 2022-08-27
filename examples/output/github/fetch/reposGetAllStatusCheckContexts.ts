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
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
