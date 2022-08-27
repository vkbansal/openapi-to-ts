/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface UsersCheckFollowingForUserPathParams {
	username: string;
	target_user: string;
}

export interface UseUsersCheckFollowingForUserQueryProps
	extends UsersCheckFollowingForUserPathParams {}

export function useUsersCheckFollowingForUserQuery(props: UseUsersCheckFollowingForUserQueryProps) {
	const { username, target_user } = props;

	return useQuery(['users/check-following-for-user', username, target_user]);
}
