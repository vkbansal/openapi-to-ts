export interface ReposDeletePullRequestReviewProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposDeletePullRequestReviewProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeletePullRequestReviewProtectionPathParams {}

export async function reposDeletePullRequestReviewProtection(
	props: ReposDeletePullRequestReviewProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_pull_request_reviews`,
		{
			method: 'DELETE',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
