import { CodeScanningAnalysisAnalysisKey } from '../schemas/CodeScanningAnalysisAnalysisKey';
import { CodeScanningAlertClassification } from '../schemas/CodeScanningAlertClassification';
import { CodeScanningAlertEnvironment } from '../schemas/CodeScanningAlertEnvironment';
import { CodeScanningAlertLocation } from '../schemas/CodeScanningAlertLocation';
import { CodeScanningRef } from '../schemas/CodeScanningRef';
import { CodeScanningAlertState } from '../schemas/CodeScanningAlertState';

export interface CodeScanningAlertInstance {
	analysis_key?: CodeScanningAnalysisAnalysisKey;
	/**
  * Classifications that have been applied to the file that triggered the alert.
For example identifying it as documentation, or a generated file.
  */
	classifications?: CodeScanningAlertClassification[];
	commit_sha?: string;
	environment?: CodeScanningAlertEnvironment;
	html_url?: string;
	location?: CodeScanningAlertLocation;
	message?: {
		text?: string;
	};
	ref?: CodeScanningRef;
	state?: CodeScanningAlertState;
}
