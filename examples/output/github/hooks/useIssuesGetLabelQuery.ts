import { useQuery } from '@tanstack/react-query';

export interface IssuesGetLabelPathParams {
	owner: string;
	repo: string;
	name: string;
}

export interface UseIssuesGetLabelQueryProps extends IssuesGetLabelPathParams {}

export function useIssuesGetLabelQuery(props: UseIssuesGetLabelQueryProps) {
	const { owner, repo, name } = props;

	return useQuery(['issues/get-label', owner, repo, name]);
}
