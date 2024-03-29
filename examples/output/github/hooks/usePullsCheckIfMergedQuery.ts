/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UsePullsCheckIfMergedQueryPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface UsePullsCheckIfMergedQueryProps extends UsePullsCheckIfMergedQueryPathParams {}

/**
 *
 */

export function usePullsCheckIfMergedQuery(props: UsePullsCheckIfMergedQueryProps) {
	const { owner, repo, pull_number } = props;

	return useQuery(['pulls/check-if-merged', owner, repo, pull_number]);
}
