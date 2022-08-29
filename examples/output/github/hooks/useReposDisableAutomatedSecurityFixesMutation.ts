/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposDisableAutomatedSecurityFixesMutationPathParams {
	owner: string;
	repo: string;
}

export interface UseReposDisableAutomatedSecurityFixesMutationProps
	extends UseReposDisableAutomatedSecurityFixesMutationPathParams {}

/**
 * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".
 */

export function useReposDisableAutomatedSecurityFixesMutation(
	props: UseReposDisableAutomatedSecurityFixesMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
