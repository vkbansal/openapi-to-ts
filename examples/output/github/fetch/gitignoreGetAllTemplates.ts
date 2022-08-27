export interface GitignoreGetAllTemplatesProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function gitignoreGetAllTemplates(props: GitignoreGetAllTemplatesProps) {
	const { ...rest } = props;

	const response = await fetch(`/gitignore/templates`, {
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
