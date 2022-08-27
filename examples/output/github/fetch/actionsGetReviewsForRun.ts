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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
