import { useQuery } from '@tanstack/react-query';

export interface GitGetTagPathParams {
	owner: string;
	repo: string;
	tag_sha: string;
}

export interface UseGitGetTagQueryProps extends GitGetTagPathParams {}

export function useGitGetTagQuery(props: UseGitGetTagQueryProps) {
	const { owner, repo, tag_sha } = props;

	return useQuery(['git/get-tag', owner, repo, tag_sha]);
}
