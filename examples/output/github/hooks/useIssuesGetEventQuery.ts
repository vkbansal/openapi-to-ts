import { useQuery } from '@tanstack/react-query';

export interface IssuesGetEventPathParams {
	owner: string;
	repo: string;
	event_id: number;
}

export interface UseIssuesGetEventQueryProps extends IssuesGetEventPathParams {}

export function useIssuesGetEventQuery(props: UseIssuesGetEventQueryProps) {
	const { owner, repo, event_id } = props;

	return useQuery(['issues/get-event', owner, repo, event_id]);
}
