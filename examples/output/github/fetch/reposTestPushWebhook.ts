export interface ReposTestPushWebhookPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface ReposTestPushWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposTestPushWebhookPathParams {}

export async function reposTestPushWebhook(props: ReposTestPushWebhookProps) {
	const { owner, repo, hook_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}/tests`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
