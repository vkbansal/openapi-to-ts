/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActionsGetGithubActionsPermissionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export interface UseActionsGetGithubActionsPermissionsRepositoryQueryProps
	extends ActionsGetGithubActionsPermissionsRepositoryPathParams {}

export function useActionsGetGithubActionsPermissionsRepositoryQuery(
	props: UseActionsGetGithubActionsPermissionsRepositoryQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['actions/get-github-actions-permissions-repository', owner, repo]);
}