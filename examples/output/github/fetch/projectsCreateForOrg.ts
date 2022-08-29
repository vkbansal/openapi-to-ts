/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ProjectsCreateForOrgPathParams {
	org: string;
}

export interface ProjectsCreateForOrgRequestBody {
	/**
	 * The description of the project.
	 */
	body?: string;
	/**
	 * The name of the project.
	 */
	name: string;
}

export interface ProjectsCreateForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsCreateForOrgPathParams {
	body: ProjectsCreateForOrgRequestBody;
}

/**
 * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 */
export async function projectsCreateForOrg(props: ProjectsCreateForOrgProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, ProjectsCreateForOrgRequestBody>({
		path: `/orgs/${org}/projects`,
		method: 'POST',
		...rest,
	});
}
