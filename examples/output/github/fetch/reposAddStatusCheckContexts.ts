export interface ReposAddStatusCheckContextsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"contexts":["contexts"]}
 */
export interface ReposAddStatusCheckContextsRequestBody {
	/**
	 * contexts parameter
	 */
	contexts: string[];
}

export interface ReposAddStatusCheckContextsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAddStatusCheckContextsPathParams {
	body: ReposAddStatusCheckContextsRequestBody;
}

export async function reposAddStatusCheckContexts(props: ReposAddStatusCheckContextsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
		{
			method: 'POST',
			body: JSON.stringify(body),
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
