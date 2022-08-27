import { useQuery } from '@tanstack/react-query';

export interface GistsGetPathParams {
	gist_id: string;
}

export interface UseGistsGetQueryProps extends GistsGetPathParams {}

export function useGistsGetQuery(props: UseGistsGetQueryProps) {
	const { gist_id } = props;

	return useQuery(['gists/get', gist_id]);
}
