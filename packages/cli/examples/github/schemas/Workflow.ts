/**
 * A GitHub Actions workflow
 */
export interface Workflow {
	/**
  * @example
https://github.com/actions/setup-ruby/workflows/CI/badge.svg
  */
	badge_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	deleted_at?: string;
	/**
  * @example
https://github.com/actions/setup-ruby/blob/master/.github/workflows/ruby.yaml
  */
	html_url: string;
	/**
  * @example
5
  */
	id: number;
	/**
  * @example
CI
  */
	name: string;
	/**
  * @example
MDg6V29ya2Zsb3cxMg==
  */
	node_id: string;
	/**
  * @example
ruby.yaml
  */
	path: string;
	/**
  * @example
active
  */
	state: 'active' | 'deleted';
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @example
https://api.github.com/repos/actions/setup-ruby/workflows/5
  */
	url: string;
}
