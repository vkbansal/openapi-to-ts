import { useQuery } from '@tanstack/react-query';

export interface UsersGetContextForUserPathParams {
	username: string;
}

export interface UsersGetContextForUserQueryParams {
	subject_type?: 'issue' | 'organization' | 'pull_request' | 'repository';
	subject_id?: string;
}

export interface UseUsersGetContextForUserQueryProps extends UsersGetContextForUserPathParams {
	queryParams: UsersGetContextForUserQueryParams;
}

export function useUsersGetContextForUserQuery(props: UseUsersGetContextForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/get-context-for-user', username, queryParams]);
}
