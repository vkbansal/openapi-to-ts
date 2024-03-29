/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsRemoveSamlSsoAuthorizationPathParams {
	org: string;
	credential_id: number;
}

export interface OrgsRemoveSamlSsoAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsRemoveSamlSsoAuthorizationPathParams {}

/**
 * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).
 *
 * An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.
 */
export async function orgsRemoveSamlSsoAuthorization(props: OrgsRemoveSamlSsoAuthorizationProps) {
	const { org, credential_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/credential-authorizations/${credential_id}`,
		method: 'DELETE',
		...rest,
	});
}
