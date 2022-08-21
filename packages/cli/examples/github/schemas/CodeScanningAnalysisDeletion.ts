/**
 * Successful deletion of a code scanning analysis
 */
export interface CodeScanningAnalysisDeletion {
	/**
	 * Next deletable analysis in chain, with last analysis deletion confirmation
	 * @format uri
	 */
	confirm_delete_url: string | null;
	/**
	 * Next deletable analysis in chain, without last analysis deletion confirmation
	 * @format uri
	 */
	next_analysis_url: string | null;
}
