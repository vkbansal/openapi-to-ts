export interface ReposReplaceAllTopicsPathParams {
	owner: string;
	repo: string;
}

export interface ReposReplaceAllTopicsRequestBody {
	/**
	 * An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
	 */
	names: string[];
}

export interface ReposReplaceAllTopicsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposReplaceAllTopicsPathParams {
	body: ReposReplaceAllTopicsRequestBody;
}

export async function reposReplaceAllTopics(props: ReposReplaceAllTopicsProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/topics`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
