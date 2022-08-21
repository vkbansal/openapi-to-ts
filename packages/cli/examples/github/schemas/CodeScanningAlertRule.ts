export interface CodeScanningAlertRule {
	/**
	 * A short description of the rule used to detect the alert.
	 */
	description?: string;
	/**
	 * description of the rule used to detect the alert.
	 */
	full_description?: string;
	/**
	 * Detailed documentation for the rule as GitHub Flavored Markdown.
	 */
	help?: string;
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
	/**
	 * A set of tags applicable for the rule.
	 */
	tags?: string[];
}
