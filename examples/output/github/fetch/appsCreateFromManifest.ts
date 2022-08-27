/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}