export interface ReposRemoveStatusCheckContextsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRemoveStatusCheckContextsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveStatusCheckContextsPathParams {}

export async function reposRemoveStatusCheckContexts(props: ReposRemoveStatusCheckContextsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
		{
			method: 'DELETE',
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
