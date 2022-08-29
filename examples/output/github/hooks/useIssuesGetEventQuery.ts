/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseIssuesGetEventQueryPathParams {
	owner: string;
	repo: string;
	event_id: number;
}

export interface UseIssuesGetEventQueryProps extends UseIssuesGetEventQueryPathParams {}

/**
 *
 */

export function useIssuesGetEventQuery(props: UseIssuesGetEventQueryProps) {
	const { owner, repo, event_id } = props;

	return useQuery(['issues/get-event', owner, repo, event_id]);
}
