/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EmojisGetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function emojisGet(props: EmojisGetProps) {
	const { ...rest } = props;

	const response = await fetch(`/emojis`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
