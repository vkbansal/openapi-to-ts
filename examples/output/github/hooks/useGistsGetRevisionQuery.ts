import { useQuery } from '@tanstack/react-query';

export interface GistsGetRevisionPathParams {
	gist_id: string;
	sha: string;
}

export interface UseGistsGetRevisionQueryProps extends GistsGetRevisionPathParams {}

export function useGistsGetRevisionQuery(props: UseGistsGetRevisionQueryProps) {
	const { gist_id, sha } = props;

	return useQuery(['gists/get-revision', gist_id, sha]);
}
