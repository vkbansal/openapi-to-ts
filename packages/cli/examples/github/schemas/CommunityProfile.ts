import { CodeOfConductSimple } from '../schemas/CodeOfConductSimple';
import { CommunityHealthFile } from '../schemas/CommunityHealthFile';
import { CommunityHealthFile } from '../schemas/CommunityHealthFile';
import { LicenseSimple } from '../schemas/LicenseSimple';
import { CommunityHealthFile } from '../schemas/CommunityHealthFile';
import { CommunityHealthFile } from '../schemas/CommunityHealthFile';
/**
 * Community Profile
 */
export interface CommunityProfile {
	/**
  * @example
true
  */
	content_reports_enabled?: boolean;
	/**
  * @example
My first repository on GitHub!
  */
	description: string | null;
	/**
  * @example
example.com
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
  * @example
100
  */
	health_percentage: number;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string | null;
}
