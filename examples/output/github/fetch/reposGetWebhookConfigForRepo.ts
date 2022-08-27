export interface ReposGetWebhookConfigForRepoPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface ReposGetWebhookConfigForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetWebhookConfigForRepoPathParams {}

export async function reposGetWebhookConfigForRepo(props: ReposGetWebhookConfigForRepoProps) {
	const { owner, repo, hook_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}/config`, {
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
