import { useQuery } from '@tanstack/react-query';

export interface OrgsListSamlSsoAuthorizationsPathParams {
	org: string;
}

export interface UseOrgsListSamlSsoAuthorizationsQueryProps
	extends OrgsListSamlSsoAuthorizationsPathParams {}

export function useOrgsListSamlSsoAuthorizationsQuery(
	props: UseOrgsListSamlSsoAuthorizationsQueryProps,
) {
	const { org } = props;

	return useQuery(['orgs/list-saml-sso-authorizations', org]);
}
