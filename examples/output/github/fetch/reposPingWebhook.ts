export interface ReposPingWebhookPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface ReposPingWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposPingWebhookPathParams {}

export async function reposPingWebhook(props: ReposPingWebhookProps) {
	const { owner, repo, hook_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}/pings`, {
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
