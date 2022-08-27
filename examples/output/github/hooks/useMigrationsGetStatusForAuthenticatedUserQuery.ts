import { useQuery } from '@tanstack/react-query';

export interface MigrationsGetStatusForAuthenticatedUserPathParams {
	migration_id: number;
}

export interface MigrationsGetStatusForAuthenticatedUserQueryParams {
	exclude?: string[];
}

export interface UseMigrationsGetStatusForAuthenticatedUserQueryProps
	extends MigrationsGetStatusForAuthenticatedUserPathParams {
	queryParams: MigrationsGetStatusForAuthenticatedUserQueryParams;
}

export function useMigrationsGetStatusForAuthenticatedUserQuery(
	props: UseMigrationsGetStatusForAuthenticatedUserQueryProps,
) {
	const { migration_id, queryParams } = props;

	return useQuery(['migrations/get-status-for-authenticated-user', migration_id, queryParams]);
}
