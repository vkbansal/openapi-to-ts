import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Repository Collaborator Permission
 */
export interface RepositoryCollaboratorPermission {
	permission: string;
	user: SimpleUser | null;
}
