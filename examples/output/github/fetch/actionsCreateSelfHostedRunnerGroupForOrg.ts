/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsCreateSelfHostedRunnerGroupForOrgPathParams {
	org: string;
}

export interface ActionsCreateSelfHostedRunnerGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateSelfHostedRunnerGroupForOrgPathParams {}

export async function actionsCreateSelfHostedRunnerGroupForOrg(
	props: ActionsCreateSelfHostedRunnerGroupForOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
