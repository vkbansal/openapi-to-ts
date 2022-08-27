import { useQuery } from '@tanstack/react-query';

export interface LicensesGetPathParams {
	license: string;
}

export interface UseLicensesGetQueryProps extends LicensesGetPathParams {}

export function useLicensesGetQuery(props: UseLicensesGetQueryProps) {
	const { license } = props;

	return useQuery(['licenses/get', license]);
}
