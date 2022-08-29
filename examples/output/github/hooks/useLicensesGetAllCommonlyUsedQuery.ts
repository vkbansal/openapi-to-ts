/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseLicensesGetAllCommonlyUsedQueryQueryParams {
	featured?: boolean;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseLicensesGetAllCommonlyUsedQueryProps {
	queryParams: UseLicensesGetAllCommonlyUsedQueryQueryParams;
}

/**
 *
 */

export function useLicensesGetAllCommonlyUsedQuery(props: UseLicensesGetAllCommonlyUsedQueryProps) {
	const { queryParams } = props;

	return useQuery(['licenses/get-all-commonly-used', queryParams]);
}
