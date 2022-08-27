export interface AppsGetWebhookConfigForAppProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function appsGetWebhookConfigForApp(props: AppsGetWebhookConfigForAppProps) {
	const { ...rest } = props;

	const response = await fetch(`/app/hook/config`, {
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
