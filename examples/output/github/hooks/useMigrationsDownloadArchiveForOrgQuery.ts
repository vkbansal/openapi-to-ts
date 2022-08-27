import { useQuery } from '@tanstack/react-query';

export interface MigrationsDownloadArchiveForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface UseMigrationsDownloadArchiveForOrgQueryProps
	extends MigrationsDownloadArchiveForOrgPathParams {}

export function useMigrationsDownloadArchiveForOrgQuery(
	props: UseMigrationsDownloadArchiveForOrgQueryProps,
) {
	const { org, migration_id } = props;

	return useQuery(['migrations/download-archive-for-org', org, migration_id]);
}
