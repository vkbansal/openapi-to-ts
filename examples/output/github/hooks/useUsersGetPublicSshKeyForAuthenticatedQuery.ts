import { useQuery } from '@tanstack/react-query';

export interface UsersGetPublicSshKeyForAuthenticatedPathParams {
	key_id: number;
}

export interface UseUsersGetPublicSshKeyForAuthenticatedQueryProps
	extends UsersGetPublicSshKeyForAuthenticatedPathParams {}

export function useUsersGetPublicSshKeyForAuthenticatedQuery(
	props: UseUsersGetPublicSshKeyForAuthenticatedQueryProps,
) {
	const { key_id } = props;

	return useQuery(['users/get-public-ssh-key-for-authenticated', key_id]);
}
