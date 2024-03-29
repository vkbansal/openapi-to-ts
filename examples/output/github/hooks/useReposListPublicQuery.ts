/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposListPublicQueryQueryParams {
	since?: number;
}

export interface UseReposListPublicQueryProps {
	queryParams: UseReposListPublicQueryQueryParams;
}

/**
 * Lists all public repositories in the order that they were created.
 *
 * Notes:
 * - For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise.
 * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
 */

export function useReposListPublicQuery(props: UseReposListPublicQueryProps) {
	const { queryParams } = props;

	return useQuery(['repos/list-public', queryParams]);
}
