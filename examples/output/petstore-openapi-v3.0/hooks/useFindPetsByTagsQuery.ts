import { useQuery } from '@tanstack/react-query';

export interface UseFindPetsByTagsQueryProps {}

export function useFindPetsByTagsQuery(props: UseFindPetsByTagsQueryProps) {
	const {} = props;
	return useQuery(['findPetsByTags']);
}
