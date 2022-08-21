/**
 * Code of Conduct Simple
 */
export interface CodeOfConductSimple {
	/**
  * @format uri
  * @example
https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md
  */
	html_url: string | null;
	/**
  * @example
citizen_code_of_conduct
  */
	key: string;
	/**
  * @example
Citizen Code of Conduct
  */
	name: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/github/docs/community/code_of_conduct
  */
	url: string;
}
