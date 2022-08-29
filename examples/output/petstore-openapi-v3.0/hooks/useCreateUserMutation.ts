/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

import type { User } from '../schemas/User';

export type UseCreateUserMutationRequestBody = User;

export interface UseCreateUserMutationProps {
	body: UseCreateUserMutationRequestBody;
}

/**
 * This can only be done by the logged in user.
 */

export function useCreateUserMutation(props: UseCreateUserMutationProps) {
	return useMutation(() => Promise.resolve());
}
