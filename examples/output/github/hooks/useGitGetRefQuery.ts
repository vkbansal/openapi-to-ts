/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface GitGetRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface UseGitGetRefQueryProps extends GitGetRefPathParams {}

export function useGitGetRefQuery(props: UseGitGetRefQueryProps) {
	const { owner, repo, ref } = props;

	return useQuery(['git/get-ref', owner, repo, ref]);
}
