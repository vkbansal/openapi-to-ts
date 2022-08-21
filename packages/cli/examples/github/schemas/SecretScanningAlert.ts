import { AlertCreatedAt } from '../schemas/AlertCreatedAt';
import { AlertHtmlUrl } from '../schemas/AlertHtmlUrl';
import { AlertNumber } from '../schemas/AlertNumber';
import { SecretScanningAlertResolution } from '../schemas/SecretScanningAlertResolution';
import { SimpleUser } from '../schemas/SimpleUser';
import { SecretScanningAlertState } from '../schemas/SecretScanningAlertState';
import { AlertUrl } from '../schemas/AlertUrl';

export interface SecretScanningAlert {
	created_at?: AlertCreatedAt;
	html_url?: AlertHtmlUrl;
	number?: AlertNumber;
	resolution?: SecretScanningAlertResolution;
	/**
	 * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
	 * @format date-time
	 */
	resolved_at?: string | null;
	resolved_by?: SimpleUser;
	/**
	 * The secret that was detected.
	 */
	secret?: string;
	/**
	 * The type of secret that secret scanning detected.
	 */
	secret_type?: string;
	state?: SecretScanningAlertState;
	url?: AlertUrl;
}
