/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
import { AlertNumber } from '../schemas/AlertNumber';
export interface CodeScanningGetAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface UseCodeScanningGetAlertQueryProps extends CodeScanningGetAlertPathParams {}

export function useCodeScanningGetAlertQuery(props: UseCodeScanningGetAlertQueryProps) {
	const { owner, repo, alert_number } = props;

	return useQuery(['code-scanning/get-alert', owner, repo, alert_number]);
}