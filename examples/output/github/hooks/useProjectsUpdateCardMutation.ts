/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseProjectsUpdateCardMutationPathParams {
	card_id: number;
}

export interface UseProjectsUpdateCardMutationRequestBody {
	/**
	 * Whether or not the card is archived
	 */
	archived?: boolean;
	/**
	 * The project card's note
	 * @example "Update all gems"
	 */
	note?: string | null;
}

export interface UseProjectsUpdateCardMutationProps
	extends UseProjectsUpdateCardMutationPathParams {
	body: UseProjectsUpdateCardMutationRequestBody;
}

/**
 *
 */

export function useProjectsUpdateCardMutation(props: UseProjectsUpdateCardMutationProps) {
	return useMutation(() => Promise.resolve());
}
