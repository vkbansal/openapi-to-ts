/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseMetaGetZenQueryProps {}

/**
 * Get a random sentence from the Zen of GitHub
 */

export function useMetaGetZenQuery(props: UseMetaGetZenQueryProps) {
	const {} = props;

	return useQuery(['meta/get-zen']);
}
