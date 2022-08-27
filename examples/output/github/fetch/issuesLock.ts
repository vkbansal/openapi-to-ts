export interface IssuesLockPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesLockRequestBody {
	/**
	 * The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:
	 * \* `off-topic`
	 * \* `too heated`
	 * \* `resolved`
	 * \* `spam`
	 */
	lock_reason?: 'off-topic' | 'resolved' | 'spam' | 'too heated';
}

export interface IssuesLockProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesLockPathParams {
	body: IssuesLockRequestBody;
}

export async function issuesLock(props: IssuesLockProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/lock`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
