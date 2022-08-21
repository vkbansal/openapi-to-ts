import { InteractionExpiry } from '../schemas/InteractionExpiry';
import { InteractionGroup } from '../schemas/InteractionGroup';
/**
 * Limit interactions to a specific type of user for a specified duration
 */
export interface InteractionLimit {
	expiry?: InteractionExpiry;
	limit: InteractionGroup;
}
