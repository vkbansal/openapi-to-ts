import { useQuery } from '@tanstack/react-query';

export interface MigrationsGetCommitAuthorsPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsGetCommitAuthorsQueryParams {
	since?: number;
}

export interface UseMigrationsGetCommitAuthorsQueryProps
	extends MigrationsGetCommitAuthorsPathParams {
	queryParams: MigrationsGetCommitAuthorsQueryParams;
}

export function useMigrationsGetCommitAuthorsQuery(props: UseMigrationsGetCommitAuthorsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['migrations/get-commit-authors', owner, repo, queryParams]);
}
