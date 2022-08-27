import { useQuery } from '@tanstack/react-query';
import { AlertNumber } from '../schemas/AlertNumber';
import { CodeScanningRef } from '../schemas/CodeScanningRef';

export interface CodeScanningListAlertsInstancesPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface CodeScanningListAlertsInstancesQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
	ref?: CodeScanningRef;
}

export interface UseCodeScanningListAlertsInstancesQueryProps
	extends CodeScanningListAlertsInstancesPathParams {
	queryParams: CodeScanningListAlertsInstancesQueryParams;
}

export function useCodeScanningListAlertsInstancesQuery(
	props: UseCodeScanningListAlertsInstancesQueryProps,
) {
	const { owner, repo, alert_number, queryParams } = props;

	return useQuery(['code-scanning/list-alerts-instances', owner, repo, alert_number, queryParams]);
}
