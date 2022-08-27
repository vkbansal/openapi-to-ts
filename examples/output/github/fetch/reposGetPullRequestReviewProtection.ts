export interface ReposGetPullRequestReviewProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetPullRequestReviewProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetPullRequestReviewProtectionPathParams {}

export async function reposGetPullRequestReviewProtection(
	props: ReposGetPullRequestReviewProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_pull_request_reviews`,
		{
			method: 'GET',
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
