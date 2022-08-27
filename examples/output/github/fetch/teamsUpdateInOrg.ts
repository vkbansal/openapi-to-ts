/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsUpdateInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsUpdateInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateInOrgPathParams {}

export async function teamsUpdateInOrg(props: TeamsUpdateInOrgProps) {
	const { org, team_slug, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}
