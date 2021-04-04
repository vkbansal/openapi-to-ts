import type ts from 'typescript';
import type { OpenAPIObject } from 'openapi3-ts';
// import { cosmiconfig } from 'cosmiconfig';

import type { TupleWithDependencies } from '@vkbansal/oa2ts-core';

export interface Options {
  spec: OpenAPIObject;
}

export interface GeneratedInterface {
  statement: ts.Statement;
  dependencies: string[];
}

// const explorer = cosmiconfig('oa2ts');

// const result = await explorer.search();

export default function generateInterfacesFromSpec(options: Options): Array<TupleWithDependencies<ts.Statement>> {
  const { spec } = options;

  const output: Array<TupleWithDependencies<ts.Statement>> = [];

  // if (spec.components) {
  //   if (spec.components.schemas) output.push(...generateSchemaDefintions(spec.components.schemas));
  //   if (spec.components.requestBodies) output.push(...generateRequestBodiesDefinition(spec.components.requestBodies));
  // }

  return output;
}
