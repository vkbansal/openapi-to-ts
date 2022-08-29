/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetQueryProps extends UseReposGetQueryPathParams {}

/**
 * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
 *
 * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
 */

export function useReposGetQuery(props: UseReposGetQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get', owner, repo]);
}
