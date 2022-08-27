import { useQuery } from '@tanstack/react-query';

export interface ActionsGetEnvironmentSecretPathParams {
	repository_id: number;
	environment_name: string;
	secret_name: string;
}

export interface UseActionsGetEnvironmentSecretQueryProps
	extends ActionsGetEnvironmentSecretPathParams {}

export function useActionsGetEnvironmentSecretQuery(
	props: UseActionsGetEnvironmentSecretQueryProps,
) {
	const { repository_id, environment_name, secret_name } = props;

	return useQuery(['actions/get-environment-secret', repository_id, environment_name, secret_name]);
}
