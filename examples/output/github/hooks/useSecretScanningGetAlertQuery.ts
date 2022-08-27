import { useQuery } from '@tanstack/react-query';
import { AlertNumber } from '../schemas/AlertNumber';

export interface SecretScanningGetAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface UseSecretScanningGetAlertQueryProps extends SecretScanningGetAlertPathParams {}

export function useSecretScanningGetAlertQuery(props: UseSecretScanningGetAlertQueryProps) {
	const { owner, repo, alert_number } = props;

	return useQuery(['secret-scanning/get-alert', owner, repo, alert_number]);
}
