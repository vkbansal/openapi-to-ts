import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Organization Invitation
 */
export interface OrganizationInvitation {
	created_at: string;
	email: string | null;
	failed_at?: string;
	failed_reason?: string;
	id: number;
	invitation_team_url: string;
	/**
  * @example
"https://api.github.com/organizations/16/invitations/1/teams"
  */
	invitation_teams_url?: string;
	inviter: SimpleUser;
	login: string | null;
	/**
  * @example
"MDIyOk9yZ2FuaXphdGlvbkludml0YXRpb24x"
  */
	node_id: string;
	role: string;
	team_count: number;
}
