import { describe, test, expect } from '@jest/globals';
import type { OpenAPIObject, ComponentsObject } from 'openapi3-ts';

import { printFile } from './testUtils';
import generateInterfaces from '../generateInterfaces';

type Data = ReturnType<typeof generateInterfaces>;

expect.addSnapshotSerializer({
  test: (val: any): val is Data => Array.isArray(val) && Array.isArray(val[0]) && val[0].length === 2 && val[0][0].kind,
  print: (val: Data): string => {
    const data = val.map(([statement]) => statement);

    return printFile(data).trim();
  }
});

function getSpec(components: ComponentsObject): OpenAPIObject {
  return {
    openapi: '',
    info: {
      title: '',
      version: ''
    },
    paths: {},
    components: {
      ...components
    }
  };
}

describe('generateInterfaces Tests', () => {
  describe('works with component.schemas', () => {
    test('works with properties', () => {
      const spec = getSpec({
        schemas: {
          BasicInterface: {
            type: 'object',
            required: ['string', 'arr'],
            properties: {
              string: { type: 'string' },
              number: { type: 'number' },
              boolean: { type: 'boolean' },
              enum: { type: 'string', enum: ['VALUE_1', 'VALUE_2'] },
              arr: { type: 'array', items: { type: 'int32' } }
            }
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface BasicInterface {
            string: string;
            number?: number;
            boolean?: boolean;
            enum?: "VALUE_1" | "VALUE_2";
            arr: Array<number>;
        }
      `);
    });

    test('with empty object', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {}
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
        }
      `);
    });

    test('with only type object', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object'
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and empty additionalProperties', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object',
            additionalProperties: {}
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and additionalProperties: true', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object',
            additionalProperties: true
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and additionalProperties: false', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object',
            additionalProperties: false
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
        }
      `);
    });

    test('with type and additionalProperties: object', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object',
            additionalProperties: {
              type: 'number'
            }
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: number;
        }
        `);
    });

    test('with properties and additionalProperties', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object',
            properties: {
              id: { type: 'number' }
            },
            additionalProperties: { type: 'number' }
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            id?: number;
            [key: string]: number;
        }
        `);
    });
  });

  describe('works with different types', () => {
    test('works with string', () => {
      const spec = getSpec({
        schemas: {
          ObjectInterface: {
            type: 'object',
            required: ['str1'],
            properties: {
              str1: { type: 'string' },
              str2: { type: 'string' },
              str3: { type: 'string', nullable: true }
            },
            additionalProperties: { type: 'string' }
          }
        }
      });

      expect(generateInterfaces({ spec })).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            str1: string;
            str2?: string;
            str3?: string | null;
            [key: string]: string;
        }
        `);
    });
  });
});
