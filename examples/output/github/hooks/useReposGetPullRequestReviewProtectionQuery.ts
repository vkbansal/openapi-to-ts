/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposGetPullRequestReviewProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetPullRequestReviewProtectionQueryProps
	extends ReposGetPullRequestReviewProtectionPathParams {}

export function useReposGetPullRequestReviewProtectionQuery(
	props: UseReposGetPullRequestReviewProtectionQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-pull-request-review-protection', owner, repo, branch]);
}
