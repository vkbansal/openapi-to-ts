import { useQuery } from '@tanstack/react-query';

export interface FindPetsByTagsQueryParams {
	tags: string[];
}

export interface UseFindPetsByTagsQueryProps {
	queryParams: FindPetsByTagsQueryParams;
}

export function useFindPetsByTagsQuery(props: UseFindPetsByTagsQueryProps) {
	const { queryParams } = props;

	return useQuery(['findPetsByTags', queryParams]);
}
