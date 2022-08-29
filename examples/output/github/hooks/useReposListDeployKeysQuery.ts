/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposListDeployKeysQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposListDeployKeysQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListDeployKeysQueryProps extends UseReposListDeployKeysQueryPathParams {
	queryParams: UseReposListDeployKeysQueryQueryParams;
}

/**
 *
 */

export function useReposListDeployKeysQuery(props: UseReposListDeployKeysQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-deploy-keys', owner, repo, queryParams]);
}
