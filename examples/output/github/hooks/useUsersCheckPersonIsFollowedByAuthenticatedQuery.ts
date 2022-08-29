/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseUsersCheckPersonIsFollowedByAuthenticatedQueryPathParams {
	username: string;
}

export interface UseUsersCheckPersonIsFollowedByAuthenticatedQueryProps
	extends UseUsersCheckPersonIsFollowedByAuthenticatedQueryPathParams {}

/**
 *
 */

export function useUsersCheckPersonIsFollowedByAuthenticatedQuery(
	props: UseUsersCheckPersonIsFollowedByAuthenticatedQueryProps,
) {
	const { username } = props;

	return useQuery(['users/check-person-is-followed-by-authenticated', username]);
}
