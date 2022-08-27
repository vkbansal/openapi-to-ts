export interface IssuesUpdatePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesUpdateRequestBody {
	/**
	 * Login for the user that this issue should be assigned to. **This field is deprecated.**
	 */
	assignee?: string | null;
	/**
	 * Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
	 */
	assignees?: string[];
	/**
	 * The contents of the issue.
	 */
	body?: string | null;
	/**
	 * Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
	 */
	labels?: Array<
		string & {
			color?: string | null;
			description?: string | null;
			id?: number;
			name?: string;
		}
	>;
	milestone?: (string & number) | null;
	/**
	 * State of the issue. Either `open` or `closed`.
	 */
	state?: 'closed' | 'open';
	/**
	 * The title of the issue.
	 */
	title?: (string & number) | null;
}

export interface IssuesUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesUpdatePathParams {
	body: IssuesUpdateRequestBody;
}

export async function issuesUpdate(props: IssuesUpdateProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}`, {
		method: 'PATCH',
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
