/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsGetWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsGetWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetWebhookPathParams {}

export async function orgsGetWebhook(props: OrgsGetWebhookProps) {
	const { org, hook_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
