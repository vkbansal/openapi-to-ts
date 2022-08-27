import { useQuery } from '@tanstack/react-query';

export interface MigrationsGetLargeFilesPathParams {
	owner: string;
	repo: string;
}

export interface UseMigrationsGetLargeFilesQueryProps extends MigrationsGetLargeFilesPathParams {}

export function useMigrationsGetLargeFilesQuery(props: UseMigrationsGetLargeFilesQueryProps) {
	const { owner, repo } = props;

	return useQuery(['migrations/get-large-files', owner, repo]);
}
