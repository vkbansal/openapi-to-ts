export interface ReposCreateDispatchEventPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateDispatchEventRequestBody {
	/**
	 * JSON payload with extra information about the webhook event that your action or worklow may use.
	 */
	client_payload?: { '[key: string]'?: any };
	/**
	 * A custom webhook event name.
	 */
	event_type: string;
}

export interface ReposCreateDispatchEventProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateDispatchEventPathParams {
	body: ReposCreateDispatchEventRequestBody;
}

export async function reposCreateDispatchEvent(props: ReposCreateDispatchEventProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/dispatches`, {
		method: 'POST',
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
