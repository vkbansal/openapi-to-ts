import { useQuery } from '@tanstack/react-query';

export interface GitGetBlobPathParams {
	owner: string;
	repo: string;
	file_sha: string;
}

export interface UseGitGetBlobQueryProps extends GitGetBlobPathParams {}

export function useGitGetBlobQuery(props: UseGitGetBlobQueryProps) {
	const { owner, repo, file_sha } = props;

	return useQuery(['git/get-blob', owner, repo, file_sha]);
}
