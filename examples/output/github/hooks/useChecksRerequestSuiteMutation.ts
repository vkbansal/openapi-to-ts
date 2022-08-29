/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseChecksRerequestSuiteMutationPathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface UseChecksRerequestSuiteMutationProps
	extends UseChecksRerequestSuiteMutationPathParams {}

/**
 * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
 *
 * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
 */

export function useChecksRerequestSuiteMutation(props: UseChecksRerequestSuiteMutationProps) {
	return useMutation(() => Promise.resolve());
}
