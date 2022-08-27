export interface ReposDeleteWebhookPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface ReposDeleteWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteWebhookPathParams {}

export async function reposDeleteWebhook(props: ReposDeleteWebhookProps) {
	const { owner, repo, hook_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
