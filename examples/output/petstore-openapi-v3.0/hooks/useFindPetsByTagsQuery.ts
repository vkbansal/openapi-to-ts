/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface FindPetsByTagsQueryParams {
	tags?: string[];
}

export interface UseFindPetsByTagsQueryProps {
	queryParams: FindPetsByTagsQueryParams;
}

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */

export function useFindPetsByTagsQuery(props: UseFindPetsByTagsQueryProps) {
	const { queryParams } = props;

	return useQuery(['findPetsByTags', queryParams]);
}
