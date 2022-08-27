/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActionsGetOrgPublicKeyPathParams {
	org: string;
}

export interface UseActionsGetOrgPublicKeyQueryProps extends ActionsGetOrgPublicKeyPathParams {}

export function useActionsGetOrgPublicKeyQuery(props: UseActionsGetOrgPublicKeyQueryProps) {
	const { org } = props;

	return useQuery(['actions/get-org-public-key', org]);
}
