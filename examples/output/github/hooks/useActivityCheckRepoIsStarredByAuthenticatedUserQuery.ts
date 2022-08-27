import { useQuery } from '@tanstack/react-query';

export interface ActivityCheckRepoIsStarredByAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface UseActivityCheckRepoIsStarredByAuthenticatedUserQueryProps
	extends ActivityCheckRepoIsStarredByAuthenticatedUserPathParams {}

export function useActivityCheckRepoIsStarredByAuthenticatedUserQuery(
	props: UseActivityCheckRepoIsStarredByAuthenticatedUserQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['activity/check-repo-is-starred-by-authenticated-user', owner, repo]);
}
