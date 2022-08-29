/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import type { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import type { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import type { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."
 *
 * Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.
 */
export async function reposUpdateWebhookConfigForRepo(props: ReposUpdateWebhookConfigForRepoProps) {
	const { owner, repo, hook_id, ...rest } = props;

	return _fetcher<unknown, unknown, ReposUpdateWebhookConfigForRepoRequestBody>({
		path: `/repos/${owner}/${repo}/hooks/${hook_id}/config`,
		method: 'PATCH',
		...rest,
	});
}
