/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetReleaseAssetQueryPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface UseReposGetReleaseAssetQueryProps extends UseReposGetReleaseAssetQueryPathParams {}

/**
 * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
 */

export function useReposGetReleaseAssetQuery(props: UseReposGetReleaseAssetQueryProps) {
	const { owner, repo, asset_id } = props;

	return useQuery(['repos/get-release-asset', owner, repo, asset_id]);
}
