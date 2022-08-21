import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { MinimalRepository } from '../schemas/MinimalRepository';
/**
 * Repository invitations let you manage who you collaborate with.
 */
export interface RepositoryInvitation {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
	 * Whether or not the invitation has expired
	 */
	expired?: boolean;
	/**
  * @example
https://github.com/octocat/Hello-World/invitations
  */
	html_url: string;
	/**
  * Unique identifier of the repository invitation.
  * @example
42
  */
	id: number;
	invitee: SimpleUser | null;
	inviter: SimpleUser | null;
	node_id: string;
	/**
  * The permission associated with the invitation.
  * @example
read
  */
	permissions: 'admin' | 'read' | 'write';
	repository: MinimalRepository;
	/**
  * URL for the repository invitation
  * @example
https://api.github.com/user/repository-invitations/1
  */
	url: string;
}
