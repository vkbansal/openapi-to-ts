export interface AppsGetBySlugPathParams {
	app_slug: string;
}

export interface AppsGetBySlugProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetBySlugPathParams {}

export async function appsGetBySlug(props: AppsGetBySlugProps) {
	const { app_slug, ...rest } = props;

	const response = await fetch(`/apps/${app_slug}`, {
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
