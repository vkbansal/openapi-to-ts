/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { CodeOfConductSimple } from '../schemas/CodeOfConductSimple';
import type { CommunityHealthFile } from '../schemas/CommunityHealthFile';
import type { LicenseSimple } from '../schemas/LicenseSimple';

/**
 * Community Profile
 */
export interface CommunityProfile {
	/**
	 * @example true
	 */
	content_reports_enabled?: boolean;
	/**
	 * @example "My first repository on GitHub!"
	 */
	description: string | null;
	/**
	 * @example "example.com"
	 */
	documentation: string | null;
	files: {
		code_of_conduct: CodeOfConductSimple | null;
		contributing: CommunityHealthFile | null;
		issue_template: CommunityHealthFile | null;
		license: LicenseSimple | null;
		pull_request_template: CommunityHealthFile | null;
		readme: CommunityHealthFile | null;
	};
	/**
	 * @example 100
	 */
	health_percentage: number;
	/**
	 * @format date-time
	 * @example "2017-02-28T19:09:29Z"
	 */
	updated_at: string | null;
}
