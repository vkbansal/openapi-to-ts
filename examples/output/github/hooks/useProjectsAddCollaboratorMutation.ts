/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseProjectsAddCollaboratorMutationPathParams {
	project_id: number;
	username: string;
}

export interface UseProjectsAddCollaboratorMutationRequestBody {
	/**
	 * The permission to grant the collaborator.
	 * @default "write"
	 * @example "write"
	 */
	permission?: 'admin' | 'read' | 'write';
}

export interface UseProjectsAddCollaboratorMutationProps
	extends UseProjectsAddCollaboratorMutationPathParams {
	body: UseProjectsAddCollaboratorMutationRequestBody;
}

/**
 * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
 */

export function useProjectsAddCollaboratorMutation(props: UseProjectsAddCollaboratorMutationProps) {
	return useMutation(() => Promise.resolve());
}
