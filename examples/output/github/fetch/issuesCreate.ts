export interface IssuesCreatePathParams {
	owner: string;
	repo: string;
}

export interface IssuesCreateRequestBody {
	/**
	 * Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
	 */
	assignee?: string | null;
	/**
	 * Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
	 */
	assignees?: string[];
	/**
	 * The contents of the issue.
	 */
	body?: string;
	/**
	 * Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
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
	 * The title of the issue.
	 */
	title: string & number;
}

export interface IssuesCreateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesCreatePathParams {
	body: IssuesCreateRequestBody;
}

export async function issuesCreate(props: IssuesCreateProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues`, {
		method: 'POST',
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
