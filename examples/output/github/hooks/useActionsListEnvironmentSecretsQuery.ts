import { useQuery } from '@tanstack/react-query';

export interface ActionsListEnvironmentSecretsPathParams {
	repository_id: number;
	environment_name: string;
}

export interface ActionsListEnvironmentSecretsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListEnvironmentSecretsQueryProps
	extends ActionsListEnvironmentSecretsPathParams {
	queryParams: ActionsListEnvironmentSecretsQueryParams;
}

export function useActionsListEnvironmentSecretsQuery(
	props: UseActionsListEnvironmentSecretsQueryProps,
) {
	const { repository_id, environment_name, queryParams } = props;

	return useQuery([
		'actions/list-environment-secrets',
		repository_id,
		environment_name,
		queryParams,
	]);
}
