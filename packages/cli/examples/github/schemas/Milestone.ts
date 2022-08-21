import { SimpleUser } from '../schemas/SimpleUser';
/**
 * A collection of related issues and pull requests.
 */
export interface Milestone {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	closed_at: string | null;
	/**
  * @example
8
  */
	closed_issues: number;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	creator: SimpleUser | null;
	/**
  * @example
Tracking milestone for version 1.0
  */
	description: string | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	due_on: string | null;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/milestones/v1.0
  */
	html_url: string;
	/**
  * @example
1002604
  */
	id: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/milestones/1/labels
  */
	labels_url: string;
	/**
  * @example
MDk6TWlsZXN0b25lMTAwMjYwNA==
  */
	node_id: string;
	/**
  * The number of the milestone.
  * @example
42
  */
	number: number;
	/**
  * @example
4
  */
	open_issues: number;
	/**
  * The state of the milestone.
  * @default open
  * @example
open
  */
	state: 'closed' | 'open';
	/**
  * The title of the milestone.
  * @example
v1.0
  */
	title: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/milestones/1
  */
	url: string;
}
