import { useQuery } from '@tanstack/react-query';

export interface ReposGetCommitSignatureProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetCommitSignatureProtectionQueryProps
	extends ReposGetCommitSignatureProtectionPathParams {}

export function useReposGetCommitSignatureProtectionQuery(
	props: UseReposGetCommitSignatureProtectionQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-commit-signature-protection', owner, repo, branch]);
}
