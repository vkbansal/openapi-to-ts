import { useQuery } from '@tanstack/react-query';

export interface UsersGetGpgKeyForAuthenticatedPathParams {
	gpg_key_id: number;
}

export interface UseUsersGetGpgKeyForAuthenticatedQueryProps
	extends UsersGetGpgKeyForAuthenticatedPathParams {}

export function useUsersGetGpgKeyForAuthenticatedQuery(
	props: UseUsersGetGpgKeyForAuthenticatedQueryProps,
) {
	const { gpg_key_id } = props;

	return useQuery(['users/get-gpg-key-for-authenticated', gpg_key_id]);
}
