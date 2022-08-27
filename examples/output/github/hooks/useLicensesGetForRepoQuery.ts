import { useQuery } from '@tanstack/react-query';

export interface LicensesGetForRepoPathParams {
	owner: string;
	repo: string;
}

export interface UseLicensesGetForRepoQueryProps extends LicensesGetForRepoPathParams {}

export function useLicensesGetForRepoQuery(props: UseLicensesGetForRepoQueryProps) {
	const { owner, repo } = props;

	return useQuery(['licenses/get-for-repo', owner, repo]);
}
