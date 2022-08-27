import { useQuery } from '@tanstack/react-query';

export interface ReposGetReleaseAssetPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface UseReposGetReleaseAssetQueryProps extends ReposGetReleaseAssetPathParams {}

export function useReposGetReleaseAssetQuery(props: UseReposGetReleaseAssetQueryProps) {
	const { owner, repo, asset_id } = props;

	return useQuery(['repos/get-release-asset', owner, repo, asset_id]);
}
