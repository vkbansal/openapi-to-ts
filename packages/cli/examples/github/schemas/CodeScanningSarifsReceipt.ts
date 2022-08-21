import { CodeScanningAnalysisSarifId } from '../schemas/CodeScanningAnalysisSarifId';

export interface CodeScanningSarifsReceipt {
	id?: CodeScanningAnalysisSarifId;
	/**
	 * The REST API URL for checking the status of the upload.
	 * @format uri
	 */
	url?: string;
}
