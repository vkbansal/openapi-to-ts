import { useQuery } from '@tanstack/react-query';

export interface MigrationsGetImportStatusPathParams {
	owner: string;
	repo: string;
}

export interface UseMigrationsGetImportStatusQueryProps
	extends MigrationsGetImportStatusPathParams {}

export function useMigrationsGetImportStatusQuery(props: UseMigrationsGetImportStatusQueryProps) {
	const { owner, repo } = props;

	return useQuery(['migrations/get-import-status', owner, repo]);
}
