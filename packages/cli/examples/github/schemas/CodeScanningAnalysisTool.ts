import { CodeScanningAnalysisToolGuid } from '../schemas/CodeScanningAnalysisToolGuid';
import { CodeScanningAnalysisToolName } from '../schemas/CodeScanningAnalysisToolName';
import { CodeScanningAnalysisToolVersion } from '../schemas/CodeScanningAnalysisToolVersion';

export interface CodeScanningAnalysisTool {
	guid?: CodeScanningAnalysisToolGuid;
	name?: CodeScanningAnalysisToolName;
	version?: CodeScanningAnalysisToolVersion;
}
