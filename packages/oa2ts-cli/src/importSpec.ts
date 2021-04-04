import type { Config, AdvancedConfig } from './types';

export async function importSpec(argv: Partial<Config>, config: AdvancedConfig | null) {
  if (config) {
    // useConfig
  } else {
    // use argv
  }
}

// import type ts from 'typescript';
// import type { OpenAPIObject } from 'openapi3-ts';
// import type { TupleWithDependencies } from '@vkbansal/oa2ts-core';

// export interface Options {
//   spec: OpenAPIObject;
// }

// export interface GeneratedInterface {
//   statement: ts.Statement;
//   dependencies: string[];
// }

// export default function generateInterfacesFromSpec(options: Options): Array<TupleWithDependencies<ts.Statement>> {
//   const { spec } = options;

//   const output: Array<TupleWithDependencies<ts.Statement>> = [];

//   // if (spec.components) {
//   //   if (spec.components.schemas) output.push(...generateSchemaDefintions(spec.components.schemas));
//   //   if (spec.components.requestBodies) output.push(...generateRequestBodiesDefinition(spec.components.requestBodies));
//   // }

//   return output;
// }
