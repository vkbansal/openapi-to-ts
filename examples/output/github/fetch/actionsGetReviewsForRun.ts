/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsGetReviewsForRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsGetReviewsForRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetReviewsForRunPathParams {}

export async function actionsGetReviewsForRun(props: ActionsGetReviewsForRunProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/approvals`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
