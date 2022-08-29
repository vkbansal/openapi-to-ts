/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposCreateCommitStatusMutationPathParams {
	owner: string;
	repo: string;
	sha: string;
}

export interface UseReposCreateCommitStatusMutationRequestBody {
	/**
	 * A string label to differentiate this status from the status of other systems. This field is case-insensitive.
	 * @default "default"
	 */
	context?: string;
	/**
	 * A short description of the status.
	 */
	description?: string;
	/**
	 * The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
	 */
	state: 'error' | 'failure' | 'pending' | 'success';
	/**
	 * The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
	 * For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:
	 * `http://ci.example.com/user/repo/build/sha`
	 */
	target_url?: string;
}

export interface UseReposCreateCommitStatusMutationProps
	extends UseReposCreateCommitStatusMutationPathParams {
	body: UseReposCreateCommitStatusMutationRequestBody;
}

/**
 * Users with push access in a repository can create commit statuses for a given SHA.
 *
 * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
 */

export function useReposCreateCommitStatusMutation(props: UseReposCreateCommitStatusMutationProps) {
	return useMutation(() => Promise.resolve());
}
