export interface ReactionRollup {
	'+1': number;
	'-1': number;
	confused: number;
	eyes: number;
	heart: number;
	hooray: number;
	laugh: number;
	rocket: number;
	total_count: number;
	/**
	 * @format uri
	 */
	url: string;
}
