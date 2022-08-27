export interface GistsCreateRequestBody {
	/**
	 * Description of the gist
	 * @example "Example Ruby script"
	 */
	description?: string;
	/**
	 * Names and content for the files that make up the gist
	 * @example {"hello.rb":{"content":"puts \"Hello, World!\""}}
	 */
	files: {
		'[key: string]'?: {
			/**
			 * Content of the file
			 */
			content: string;
		};
	};
	public?: (boolean & 'false') | 'true';
}

export interface GistsCreateProps extends Omit<RequestInit, 'method' | 'body'> {
	body: GistsCreateRequestBody;
}

export async function gistsCreate(props: GistsCreateProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/gists`, {
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
