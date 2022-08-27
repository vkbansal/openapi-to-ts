import { useQuery } from '@tanstack/react-query';

export interface ReposGetCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface UseReposGetCommitCommentQueryProps extends ReposGetCommitCommentPathParams {}

export function useReposGetCommitCommentQuery(props: UseReposGetCommitCommentQueryProps) {
	const { owner, repo, comment_id } = props;

	return useQuery(['repos/get-commit-comment', owner, repo, comment_id]);
}
