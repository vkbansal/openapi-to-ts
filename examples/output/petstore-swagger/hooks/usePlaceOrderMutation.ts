/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

import type { Order } from '../schemas/Order';

export type UsePlaceOrderMutationRequestBody = Order;

export interface UsePlaceOrderMutationProps {
	body: UsePlaceOrderMutationRequestBody;
}

/**
 *
 */

export function usePlaceOrderMutation(props: UsePlaceOrderMutationProps) {
	return useMutation(() => Promise.resolve());
}
