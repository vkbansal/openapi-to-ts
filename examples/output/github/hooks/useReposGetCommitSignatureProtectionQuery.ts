/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetCommitSignatureProtectionQueryPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetCommitSignatureProtectionQueryProps
	extends UseReposGetCommitSignatureProtectionQueryPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.
 *
 * **Note**: You must enable branch protection to require signed commits.
 */

export function useReposGetCommitSignatureProtectionQuery(
	props: UseReposGetCommitSignatureProtectionQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-commit-signature-protection', owner, repo, branch]);
}
