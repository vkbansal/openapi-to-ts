export interface ReposGetWebhookPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface ReposGetWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetWebhookPathParams {}

export async function reposGetWebhook(props: ReposGetWebhookProps) {
	const { owner, repo, hook_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
