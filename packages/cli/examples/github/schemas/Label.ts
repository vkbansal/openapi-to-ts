/**
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
 */
export interface Label {
	/**
  * 6-character hex code, without the leading #, identifying the color
  * @example
FFFFFF
  */
	color: string;
	/**
  * @example
true
  */
	default: boolean;
	/**
  * @example
Something isn't working
  */
	description: string | null;
	/**
  * @example
208045946
  */
	id: number;
	/**
  * The name of the label.
  * @example
bug
  */
	name: string;
	/**
  * @example
MDU6TGFiZWwyMDgwNDU5NDY=
  */
	node_id: string;
	/**
  * URL for the label
  * @format uri
  * @example
https://api.github.com/repositories/42/labels/bug
  */
	url: string;
}
