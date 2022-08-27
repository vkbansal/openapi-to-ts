import { useQuery } from '@tanstack/react-query';

export interface ActionsGetOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface UseActionsGetOrgSecretQueryProps extends ActionsGetOrgSecretPathParams {}

export function useActionsGetOrgSecretQuery(props: UseActionsGetOrgSecretQueryProps) {
	const { org, secret_name } = props;

	return useQuery(['actions/get-org-secret', org, secret_name]);
}
