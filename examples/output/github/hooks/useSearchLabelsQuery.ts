import { useQuery } from '@tanstack/react-query';

export interface SearchLabelsQueryParams {
	repository_id: number;
	q: string;
	sort?: 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
}

export interface UseSearchLabelsQueryProps {
	queryParams: SearchLabelsQueryParams;
}

export function useSearchLabelsQuery(props: UseSearchLabelsQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/labels', queryParams]);
}
