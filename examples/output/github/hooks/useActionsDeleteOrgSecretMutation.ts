/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseActionsDeleteOrgSecretMutationPathParams {
	org: string;
	secret_name: string;
}

export interface UseActionsDeleteOrgSecretMutationProps
	extends UseActionsDeleteOrgSecretMutationPathParams {}

/**
 * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 */

export function useActionsDeleteOrgSecretMutation(props: UseActionsDeleteOrgSecretMutationProps) {
	return useMutation(() => Promise.resolve());
}
