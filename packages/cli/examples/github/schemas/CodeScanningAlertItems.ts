import { AlertCreatedAt } from '../schemas/AlertCreatedAt';
import { CodeScanningAlertDismissedAt } from '../schemas/CodeScanningAlertDismissedAt';
import { SimpleUser } from '../schemas/SimpleUser';
import { CodeScanningAlertDismissedReason } from '../schemas/CodeScanningAlertDismissedReason';
import { AlertHtmlUrl } from '../schemas/AlertHtmlUrl';
import { AlertInstancesUrl } from '../schemas/AlertInstancesUrl';
import { CodeScanningAlertInstance } from '../schemas/CodeScanningAlertInstance';
import { AlertNumber } from '../schemas/AlertNumber';
import { CodeScanningAlertRuleSummary } from '../schemas/CodeScanningAlertRuleSummary';
import { CodeScanningAlertState } from '../schemas/CodeScanningAlertState';
import { CodeScanningAnalysisTool } from '../schemas/CodeScanningAnalysisTool';
import { AlertUrl } from '../schemas/AlertUrl';

export interface CodeScanningAlertItems {
	created_at: AlertCreatedAt;
	dismissed_at: CodeScanningAlertDismissedAt;
	dismissed_by: SimpleUser;
	dismissed_reason: CodeScanningAlertDismissedReason;
	html_url: AlertHtmlUrl;
	instances_url: AlertInstancesUrl;
	most_recent_instance: CodeScanningAlertInstance;
	number: AlertNumber;
	rule: CodeScanningAlertRuleSummary;
	state: CodeScanningAlertState;
	tool: CodeScanningAnalysisTool;
	url: AlertUrl;
}
