import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
 */
export interface Reaction {
	/**
  * The reaction to use
  * @example
heart
  */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * @example
MDg6UmVhY3Rpb24x
  */
	node_id: string;
	user: SimpleUser | null;
}
