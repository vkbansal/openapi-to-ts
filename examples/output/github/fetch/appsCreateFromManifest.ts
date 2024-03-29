/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface AppsCreateFromManifestPathParams {
	code: string;
}

export interface AppsCreateFromManifestProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCreateFromManifestPathParams {}

/**
 * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
 */
export async function appsCreateFromManifest(props: AppsCreateFromManifestProps) {
	const { code, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/app-manifests/${code}/conversions`,
		method: 'POST',
		...rest,
	});
}
