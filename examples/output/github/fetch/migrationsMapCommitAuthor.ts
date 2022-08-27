export interface MigrationsMapCommitAuthorPathParams {
	owner: string;
	repo: string;
	author_id: number;
}

export interface MigrationsMapCommitAuthorRequestBody {
	/**
	 * The new Git author email.
	 */
	email?: string;
	/**
	 * The new Git author name.
	 */
	name?: string;
	/**
	 * @example "\"can't touch this\""
	 */
	remote_id?: string;
}

export interface MigrationsMapCommitAuthorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsMapCommitAuthorPathParams {
	body: MigrationsMapCommitAuthorRequestBody;
}

export async function migrationsMapCommitAuthor(props: MigrationsMapCommitAuthorProps) {
	const { owner, repo, author_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import/authors/${author_id}`, {
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
