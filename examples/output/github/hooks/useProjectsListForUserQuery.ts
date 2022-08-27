import { useQuery } from '@tanstack/react-query';

export interface ProjectsListForUserPathParams {
	username: string;
}

export interface ProjectsListForUserQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseProjectsListForUserQueryProps extends ProjectsListForUserPathParams {
	queryParams: ProjectsListForUserQueryParams;
}

export function useProjectsListForUserQuery(props: UseProjectsListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['projects/list-for-user', username, queryParams]);
}
