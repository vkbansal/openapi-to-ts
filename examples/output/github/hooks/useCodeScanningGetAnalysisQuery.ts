import { useQuery } from '@tanstack/react-query';

export interface CodeScanningGetAnalysisPathParams {
	owner: string;
	repo: string;
	analysis_id: number;
}

export interface UseCodeScanningGetAnalysisQueryProps extends CodeScanningGetAnalysisPathParams {}

export function useCodeScanningGetAnalysisQuery(props: UseCodeScanningGetAnalysisQueryProps) {
	const { owner, repo, analysis_id } = props;

	return useQuery(['code-scanning/get-analysis', owner, repo, analysis_id]);
}
