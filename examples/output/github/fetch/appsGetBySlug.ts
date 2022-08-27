/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
