/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseDeletePetMutationPathParams {
	/**
	 * @format int64
	 */
	petId: number;
}

export interface UseDeletePetMutationProps extends UseDeletePetMutationPathParams {}

/**
 *
 */

export function useDeletePetMutation(props: UseDeletePetMutationProps) {
	return useMutation(() => Promise.resolve());
}
