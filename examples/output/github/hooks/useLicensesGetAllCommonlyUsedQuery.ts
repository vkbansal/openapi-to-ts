import { useQuery } from '@tanstack/react-query';

export interface LicensesGetAllCommonlyUsedQueryParams {
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
	queryParams: LicensesGetAllCommonlyUsedQueryParams;
}

export function useLicensesGetAllCommonlyUsedQuery(props: UseLicensesGetAllCommonlyUsedQueryProps) {
	const { queryParams } = props;

	return useQuery(['licenses/get-all-commonly-used', queryParams]);
}
