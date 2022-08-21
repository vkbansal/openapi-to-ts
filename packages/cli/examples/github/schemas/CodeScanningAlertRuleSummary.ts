export interface CodeScanningAlertRuleSummary {
	/**
	 * A short description of the rule used to detect the alert.
	 */
	description?: string;
	/**
	 * A unique identifier for the rule used to detect the alert.
	 */
	id?: string | null;
	/**
	 * The name of the rule used to detect the alert.
	 */
	name?: string;
	/**
	 * The severity of the alert.
	 */
	severity?: 'error' | 'none' | 'note' | 'warning' | null;
}
