export interface AppsCreateFromManifestPathParams {
	code: string;
}

export interface AppsCreateFromManifestProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCreateFromManifestPathParams {}

export async function appsCreateFromManifest(props: AppsCreateFromManifestProps) {
	const { code, ...rest } = props;

	const response = await fetch(`/app-manifests/${code}/conversions`, {
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
