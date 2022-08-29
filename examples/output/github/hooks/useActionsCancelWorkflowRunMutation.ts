/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseActionsCancelWorkflowRunMutationPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsCancelWorkflowRunMutationProps
	extends UseActionsCancelWorkflowRunMutationPathParams {}

/**
 * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 */

export function useActionsCancelWorkflowRunMutation(
	props: UseActionsCancelWorkflowRunMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
