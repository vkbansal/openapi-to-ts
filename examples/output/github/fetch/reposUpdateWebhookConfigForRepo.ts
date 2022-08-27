export interface ReposUpdateWebhookConfigForRepoPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

/**
 * @example {"content_type":"json","insecure_ssl":"0","secret":"********","url":"https://example.com/webhook"}
 */
export interface ReposUpdateWebhookConfigForRepoRequestBody {
	content_type?: WebhookConfigContentType;
	insecure_ssl?: WebhookConfigInsecureSsl;
	secret?: WebhookConfigSecret;
	url?: WebhookConfigUrl;
}

export interface ReposUpdateWebhookConfigForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateWebhookConfigForRepoPathParams {
	body: ReposUpdateWebhookConfigForRepoRequestBody;
}

export async function reposUpdateWebhookConfigForRepo(props: ReposUpdateWebhookConfigForRepoProps) {
	const { owner, repo, hook_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}/config`, {
		method: 'PATCH',
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
