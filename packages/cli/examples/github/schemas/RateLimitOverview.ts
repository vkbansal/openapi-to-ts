import { RateLimit } from '../schemas/RateLimit';
import { RateLimit } from '../schemas/RateLimit';
import { RateLimit } from '../schemas/RateLimit';
import { RateLimit } from '../schemas/RateLimit';
import { RateLimit } from '../schemas/RateLimit';
import { RateLimit } from '../schemas/RateLimit';
import { RateLimit } from '../schemas/RateLimit';
/**
 * Rate Limit Overview
 */
export interface RateLimitOverview {
	rate: RateLimit;
	resources: {
		code_scanning_upload?: RateLimit;
		core: RateLimit;
		graphql?: RateLimit;
		integration_manifest?: RateLimit;
		search: RateLimit;
		source_import?: RateLimit;
	};
}
