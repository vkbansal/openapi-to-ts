/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsUpdateWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsUpdateWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsUpdateWebhookPathParams {}

export async function orgsUpdateWebhook(props: OrgsUpdateWebhookProps) {
	const { org, hook_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}