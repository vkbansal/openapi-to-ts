/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseOrgsDeleteWebhookMutationPathParams {
	org: string;
	hook_id: number;
}

export interface UseOrgsDeleteWebhookMutationProps extends UseOrgsDeleteWebhookMutationPathParams {}

/**
 *
 */

export function useOrgsDeleteWebhookMutation(props: UseOrgsDeleteWebhookMutationProps) {
	return useMutation(() => Promise.resolve());
}
