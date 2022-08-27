/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface MetaGetZenProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function metaGetZen(props: MetaGetZenProps) {
	const { ...rest } = props;

	const response = await fetch(`/zen`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
