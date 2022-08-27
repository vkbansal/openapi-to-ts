import { useQuery } from '@tanstack/react-query';

export interface MigrationsGetArchiveForAuthenticatedUserPathParams {
	migration_id: number;
}

export interface UseMigrationsGetArchiveForAuthenticatedUserQueryProps
	extends MigrationsGetArchiveForAuthenticatedUserPathParams {}

export function useMigrationsGetArchiveForAuthenticatedUserQuery(
	props: UseMigrationsGetArchiveForAuthenticatedUserQueryProps,
) {
	const { migration_id } = props;

	return useQuery(['migrations/get-archive-for-authenticated-user', migration_id]);
}
