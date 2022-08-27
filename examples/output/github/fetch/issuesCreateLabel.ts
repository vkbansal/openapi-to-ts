export interface IssuesCreateLabelPathParams {
	owner: string;
	repo: string;
}

export interface IssuesCreateLabelRequestBody {
	/**
	 * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
	 */
	color?: string;
	/**
	 * A short description of the label.
	 */
	description?: string;
	/**
	 * The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
	 */
	name: string;
}

export interface IssuesCreateLabelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesCreateLabelPathParams {
	body: IssuesCreateLabelRequestBody;
}

export async function issuesCreateLabel(props: IssuesCreateLabelProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/labels`, {
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
