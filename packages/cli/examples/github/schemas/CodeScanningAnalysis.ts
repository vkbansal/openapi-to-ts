import { CodeScanningAnalysisAnalysisKey } from '../schemas/CodeScanningAnalysisAnalysisKey';
import { CodeScanningAnalysisCommitSha } from '../schemas/CodeScanningAnalysisCommitSha';
import { CodeScanningAnalysisCreatedAt } from '../schemas/CodeScanningAnalysisCreatedAt';
import { CodeScanningAnalysisEnvironment } from '../schemas/CodeScanningAnalysisEnvironment';
import { CodeScanningRef } from '../schemas/CodeScanningRef';
import { CodeScanningAnalysisSarifId } from '../schemas/CodeScanningAnalysisSarifId';
import { CodeScanningAnalysisTool } from '../schemas/CodeScanningAnalysisTool';
import { CodeScanningAnalysisUrl } from '../schemas/CodeScanningAnalysisUrl';

export interface CodeScanningAnalysis {
	analysis_key: CodeScanningAnalysisAnalysisKey;
	commit_sha: CodeScanningAnalysisCommitSha;
	created_at: CodeScanningAnalysisCreatedAt;
	deletable: boolean;
	environment: CodeScanningAnalysisEnvironment;
	/**
  * @example
error reading field xyz
  */
	error: string;
	/**
	 * Unique identifier for this analysis.
	 */
	id: number;
	ref: CodeScanningRef;
	/**
	 * The total number of results in the analysis.
	 */
	results_count: number;
	/**
	 * The total number of rules used in the analysis.
	 */
	rules_count: number;
	sarif_id: CodeScanningAnalysisSarifId;
	tool: CodeScanningAnalysisTool;
	url: CodeScanningAnalysisUrl;
}
