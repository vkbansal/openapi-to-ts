/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseIssuesGetLabelQueryPathParams {
	owner: string;
	repo: string;
	name: string;
}

export interface UseIssuesGetLabelQueryProps extends UseIssuesGetLabelQueryPathParams {}

/**
 *
 */

export function useIssuesGetLabelQuery(props: UseIssuesGetLabelQueryProps) {
	const { owner, repo, name } = props;

	return useQuery(['issues/get-label', owner, repo, name]);
}
