import { useQuery } from '@tanstack/react-query';

export interface ActionsGetEnvironmentPublicKeyPathParams {
	repository_id: number;
	environment_name: string;
}

export interface UseActionsGetEnvironmentPublicKeyQueryProps
	extends ActionsGetEnvironmentPublicKeyPathParams {}

export function useActionsGetEnvironmentPublicKeyQuery(
	props: UseActionsGetEnvironmentPublicKeyQueryProps,
) {
	const { repository_id, environment_name } = props;

	return useQuery(['actions/get-environment-public-key', repository_id, environment_name]);
}
