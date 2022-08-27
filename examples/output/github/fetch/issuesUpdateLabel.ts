export interface IssuesUpdateLabelPathParams {
	owner: string;
	repo: string;
	name: string;
}

export interface IssuesUpdateLabelRequestBody {
	/**
	 * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
	 */
	color?: string;
	/**
	 * A short description of the label.
	 */
	description?: string;
	/**
	 * The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
	 */
	new_name?: string;
}

export interface IssuesUpdateLabelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesUpdateLabelPathParams {
	body: IssuesUpdateLabelRequestBody;
}

export async function issuesUpdateLabel(props: IssuesUpdateLabelProps) {
	const { owner, repo, name, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/labels/${name}`, {
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
