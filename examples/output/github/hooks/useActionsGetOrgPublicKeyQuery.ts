import { useQuery } from '@tanstack/react-query';

export interface ActionsGetOrgPublicKeyPathParams {
	org: string;
}

export interface UseActionsGetOrgPublicKeyQueryProps extends ActionsGetOrgPublicKeyPathParams {}

export function useActionsGetOrgPublicKeyQuery(props: UseActionsGetOrgPublicKeyQueryProps) {
	const { org } = props;

	return useQuery(['actions/get-org-public-key', org]);
}
