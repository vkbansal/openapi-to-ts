/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposCreateForkMutationPathParams {
	owner: string;
	repo: string;
}

export interface UseReposCreateForkMutationQueryParams {
	org?: string;
	organization?: string;
}

export interface UseReposCreateForkMutationRequestBody {
	/**
	 * Optional parameter to specify the organization name if forking into an organization.
	 */
	organization?: string;
}

export interface UseReposCreateForkMutationProps extends UseReposCreateForkMutationPathParams {
	queryParams: UseReposCreateForkMutationQueryParams;

	body: UseReposCreateForkMutationRequestBody;
}

/**
 * Create a fork for the authenticated user.
 *
 * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com).
 */

export function useReposCreateForkMutation(props: UseReposCreateForkMutationProps) {
	return useMutation(() => Promise.resolve());
}
