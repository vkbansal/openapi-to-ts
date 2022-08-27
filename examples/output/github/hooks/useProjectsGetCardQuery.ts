import { useQuery } from '@tanstack/react-query';

export interface ProjectsGetCardPathParams {
	card_id: number;
}

export interface UseProjectsGetCardQueryProps extends ProjectsGetCardPathParams {}

export function useProjectsGetCardQuery(props: UseProjectsGetCardQueryProps) {
	const { card_id } = props;

	return useQuery(['projects/get-card', card_id]);
}
