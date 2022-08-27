import { useQuery } from '@tanstack/react-query';

export interface ReposListLanguagesPathParams {
	owner: string;
	repo: string;
}

export interface UseReposListLanguagesQueryProps extends ReposListLanguagesPathParams {}

export function useReposListLanguagesQuery(props: UseReposListLanguagesQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/list-languages', owner, repo]);
}
