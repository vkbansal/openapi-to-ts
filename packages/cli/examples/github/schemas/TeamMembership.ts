/**
 * Team Membership
 */
export interface TeamMembership {
	/**
  * The role of the user in the team.
  * @default member
  * @example
member
  */
	role: 'maintainer' | 'member';
	state: string;
	/**
	 * @format uri
	 */
	url: string;
}
