import { describe, test, expect } from '@jest/globals';

import { printFile } from './testUtils';
import generateInterface from '../generateInterface';
import { SchemaObject } from 'openapi3-ts';

type Data = ReturnType<typeof generateInterface>;

expect.addSnapshotSerializer({
  test: (val: any): val is Data => val.node && Array.isArray(val.dependencies),
  print: (val: Data): string => {
    return printFile(val.node).trim();
  }
});

describe('generateInterfaces Tests', () => {
  describe('works with component.schemas', () => {
    test('works with properties', () => {
      const spec: SchemaObject = {
        type: 'object',
        required: ['string', 'arr'],
        properties: {
          string: { type: 'string' },
          number: { type: 'number' },
          boolean: { type: 'boolean' },
          enum: { type: 'string', enum: ['VALUE_1', 'VALUE_2'] },
          arr: { type: 'array', items: { type: 'integer', format: 'int32' } }
        }
      };

      expect(generateInterface('BasicInterface', spec)).toMatchInlineSnapshot(`
        export interface BasicInterface {
            string: string;
            number?: number;
            boolean?: boolean;
            enum?: "VALUE_1" | "VALUE_2";
            arr: number[];
        }
      `);
    });

    test('with empty object', () => {
      const spec = {};

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
        }
      `);
    });

    test('with only type object', () => {
      const spec: SchemaObject = { type: 'object' };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and empty additionalProperties', () => {
      const spec: SchemaObject = { type: 'object', additionalProperties: {} };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and additionalProperties: true', () => {
      const spec: SchemaObject = { type: 'object', additionalProperties: true };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and additionalProperties: false', () => {
      const spec: SchemaObject = { type: 'object', additionalProperties: false };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
        }
      `);
    });

    test('with type and additionalProperties: object', () => {
      const spec: SchemaObject = {
        type: 'object',
        additionalProperties: {
          type: 'number'
        }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: number;
        }
        `);
    });

    test('with properties and additionalProperties', () => {
      const spec: SchemaObject = {
        type: 'object',
        properties: {
          id: { type: 'number' }
        },
        additionalProperties: { type: 'number' }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            id?: number;
            [key: string]: number;
        }
        `);
    });
  });

  describe('works with different types', () => {
    test('works with string', () => {
      const spec: SchemaObject = {
        type: 'object',
        required: ['string'],
        properties: {
          string: { type: 'string' },
          byte: { type: 'string', format: 'byte' },
          binary: { type: 'string', format: 'binary' },
          date: { type: 'string', format: 'date' },
          dateTime: { type: 'string', format: 'dateTime' },
          dateTime2: { type: 'string', format: 'date-time' },
          password: { type: 'string', format: 'password' }
        },
        additionalProperties: { type: 'string' }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            string: string;
            /**
             * @format byte
              */
            byte?: string;
            /**
             * @format binary
              */
            binary?: string;
            /**
             * @format date
              */
            date?: string;
            /**
             * @format dateTime
              */
            dateTime?: string;
            /**
             * @format date-time
              */
            dateTime2?: string;
            /**
             * @format password
              */
            password?: string;
            [key: string]: string;
        }
      `);
    });

    test('works with numbers', () => {
      const spec: SchemaObject = {
        type: 'object',
        required: ['int32', 'int64', 'number'],
        properties: {
          int32: { type: 'integer', format: 'int32' },
          int64: { type: 'integer', format: 'int64' },
          number: { type: 'integer' },
          integer: { type: 'number' },
          long: { type: 'number', format: 'long' },
          float: { type: 'number', format: 'float' },
          double: { type: 'number', format: 'double' }
        },
        additionalProperties: { type: 'string' }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            /**
             * @format int32
              */
            int32: number;
            /**
             * @format int64
              */
            int64: number;
            number: number;
            integer?: number;
            /**
             * @format long
              */
            long?: number;
            /**
             * @format float
              */
            float?: number;
            /**
             * @format double
              */
            double?: number;
            [key: string]: string;
        }
      `);
    });

    test('works with boolean', () => {
      const spec: SchemaObject = { type: 'object', properties: { bool: { type: 'boolean' } } };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            bool?: boolean;
        }
      `);
    });

    test('works with object', () => {
      const spec: SchemaObject = { type: 'object', properties: { key: { type: 'object' } } };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            key?: {
                [key: string]: any;
            };
        }
      `);
    });

    test('works with enum', () => {
      const spec: SchemaObject = {
        type: 'object',
        properties: {
          enum: { type: 'string', enum: ['VALUE_1', 'VALUE_2', 'VALUE_3'] }
        }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            enum?: "VALUE_1" | "VALUE_2" | "VALUE_3";
        }
      `);
    });

    test('works with array', () => {
      const spec: SchemaObject = {
        type: 'object',
        properties: {
          str: { type: 'array', items: { type: 'string' } },
          num: { type: 'array', items: { type: 'number' } },
          enum: { type: 'array', items: { type: 'string', enum: ['VALUE_1', 'VALUE_2', 'VALUE_3'] } }
        }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            str?: string[];
            num?: number[];
            enum?: Array<"VALUE_1" | "VALUE_2" | "VALUE_3">;
        }
      `);
    });
  });
});
