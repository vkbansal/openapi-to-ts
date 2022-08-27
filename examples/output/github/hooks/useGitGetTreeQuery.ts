import { useQuery } from '@tanstack/react-query';

export interface GitGetTreePathParams {
	owner: string;
	repo: string;
	tree_sha: string;
}

export interface GitGetTreeQueryParams {
	recursive?: string;
}

export interface UseGitGetTreeQueryProps extends GitGetTreePathParams {
	queryParams: GitGetTreeQueryParams;
}

export function useGitGetTreeQuery(props: UseGitGetTreeQueryProps) {
	const { owner, repo, tree_sha, queryParams } = props;

	return useQuery(['git/get-tree', owner, repo, tree_sha, queryParams]);
}
