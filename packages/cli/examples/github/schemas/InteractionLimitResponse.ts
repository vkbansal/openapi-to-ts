import { InteractionGroup } from '../schemas/InteractionGroup';
/**
 * Interaction limit settings.
 */
export interface InteractionLimitResponse {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	expires_at: string;
	limit: InteractionGroup;
	/**
  * @example
repository
  */
	origin: string;
}
