export interface CodeScanningSarifsStatus {
	/**
	 * The REST API URL for getting the analyses associated with the upload.
	 * @format uri
	 */
	analyses_url?: string | null;
	/**
	 * `pending` files have not yet been processed, while `complete` means all results in the SARIF have been stored.
	 */
	processing_status?: 'complete' | 'pending';
}
