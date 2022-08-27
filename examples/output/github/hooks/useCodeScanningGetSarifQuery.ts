import { useQuery } from '@tanstack/react-query';

export interface CodeScanningGetSarifPathParams {
	owner: string;
	repo: string;
	sarif_id: string;
}

export interface UseCodeScanningGetSarifQueryProps extends CodeScanningGetSarifPathParams {}

export function useCodeScanningGetSarifQuery(props: UseCodeScanningGetSarifQueryProps) {
	const { owner, repo, sarif_id } = props;

	return useQuery(['code-scanning/get-sarif', owner, repo, sarif_id]);
}
