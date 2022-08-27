/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}