export interface GistsUpdatePathParams {
	gist_id: string;
}

export interface GistsUpdateRequestBody {
	/**
	 * Description of the gist
	 * @example "Example Ruby script"
	 */
	description?: string;
	/**
	 * Names of files to be updated
	 * @example {"hello.rb":{"content":"blah","filename":"goodbye.rb"}}
	 */
	files?: {
		'[key: string]'?: {
			/**
			 * The new content of the file
			 */
			content?: string;
			/**
			 * The new filename for the file
			 */
			filename?: string | null;
		} | null;
	};
}

export interface GistsUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsUpdatePathParams {
	body: GistsUpdateRequestBody;
}

export async function gistsUpdate(props: GistsUpdateProps) {
	const { gist_id, body, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}`, {
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
