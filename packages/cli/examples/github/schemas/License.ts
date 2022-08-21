/**
 * License
 */
export interface License {
	/**
  * @example


The MIT License (MIT)

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

  */
	body: string;
	/**
  * @example
include-copyright
  */
	conditions: string[];
	/**
  * @example
A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty.
  */
	description: string;
	/**
  * @example
true
  */
	featured: boolean;
	/**
  * @format uri
  * @example
http://choosealicense.com/licenses/mit/
  */
	html_url: string;
	/**
  * @example
Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.
  */
	implementation: string;
	/**
  * @example
mit
  */
	key: string;
	/**
  * @example
no-liability
  */
	limitations: string[];
	/**
  * @example
MIT License
  */
	name: string;
	/**
  * @example
MDc6TGljZW5zZW1pdA==
  */
	node_id: string;
	/**
  * @example
commercial-use,modifications,distribution,sublicense,private-use
  */
	permissions: string[];
	/**
  * @example
MIT
  */
	spdx_id: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/licenses/mit
  */
	url: string | null;
}
