export interface ReposSetStatusCheckContextsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"contexts":["contexts"]}
 */
export interface ReposSetStatusCheckContextsRequestBody {
	/**
	 * contexts parameter
	 */
	contexts: string[];
}

export interface ReposSetStatusCheckContextsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetStatusCheckContextsPathParams {
	body: ReposSetStatusCheckContextsRequestBody;
}

export async function reposSetStatusCheckContexts(props: ReposSetStatusCheckContextsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
		{
			method: 'PUT',
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
