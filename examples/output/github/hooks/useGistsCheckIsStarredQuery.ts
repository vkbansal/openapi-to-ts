import { useQuery } from '@tanstack/react-query';

export interface GistsCheckIsStarredPathParams {
	gist_id: string;
}

export interface UseGistsCheckIsStarredQueryProps extends GistsCheckIsStarredPathParams {}

export function useGistsCheckIsStarredQuery(props: UseGistsCheckIsStarredQueryProps) {
	const { gist_id } = props;

	return useQuery(['gists/check-is-starred', gist_id]);
}
