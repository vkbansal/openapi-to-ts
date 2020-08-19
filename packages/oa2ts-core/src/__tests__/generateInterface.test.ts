import { describe, test, expect } from '@jest/globals';

import { printFile } from './testUtils';
import generateInterface from '../generateInterface';

type Data = ReturnType<typeof generateInterface>;

expect.addSnapshotSerializer({
  test: (val: any): val is Data => Array.isArray(val) && val.length === 2 && val[0].kind,
  print: (val: Data): string => {
    return printFile([val[0]]).trim();
  }
});

describe('generateInterfaces Tests', () => {
  describe('works with component.schemas', () => {
    test('works with properties', () => {
      const spec = {
        type: 'object',
        required: ['string', 'arr'],
        properties: {
          string: { type: 'string' },
          number: { type: 'number' },
          boolean: { type: 'boolean' },
          enum: { type: 'string', enum: ['VALUE_1', 'VALUE_2'] },
          arr: { type: 'array', items: { type: 'int32' } }
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
      const spec = { type: 'object' };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and empty additionalProperties', () => {
      const spec = { type: 'object', additionalProperties: {} };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and additionalProperties: true', () => {
      const spec = { type: 'object', additionalProperties: true };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            [key: string]: any;
        }
      `);
    });

    test('with type and additionalProperties: false', () => {
      const spec = { type: 'object', additionalProperties: false };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
        }
      `);
    });

    test('with type and additionalProperties: object', () => {
      const spec = {
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
      const spec = {
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
      const spec = {
        type: 'object',
        required: ['string'],
        properties: {
          string: { type: 'string' },
          byte: { type: 'byte' },
          binary: { type: 'binary' },
          date: { type: 'date' },
          dateTime: { type: 'dateTime' },
          dateTime2: { type: 'date-time' },
          password: { type: 'password' }
        },
        additionalProperties: { type: 'string' }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            string: string;
            byte?: string;
            binary?: string;
            date?: string;
            dateTime?: string;
            dateTime2?: string;
            password?: string;
            [key: string]: string;
        }
      `);
    });

    test('works with numbers', () => {
      const spec = {
        type: 'object',
        required: ['int32', 'int64', 'number'],
        properties: {
          int32: { type: 'int32' },
          int64: { type: 'int64' },
          number: { type: 'number' },
          integer: { type: 'integer' },
          long: { type: 'long' },
          float: { type: 'float' },
          double: { type: 'double' }
        },
        additionalProperties: { type: 'string' }
      };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            int32: number;
            int64: number;
            number: number;
            integer?: number;
            long?: number;
            float?: number;
            double?: number;
            [key: string]: string;
        }
      `);
    });

    test('works with boolean', () => {
      const spec = { type: 'object', properties: { bool: { type: 'boolean' } } };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            bool?: boolean;
        }
      `);
    });

    test('works with void', () => {
      const spec = { type: 'object', properties: { key: { type: 'void' } } };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            key?: void;
        }
      `);
    });

    test('works with object', () => {
      const spec = { type: 'object', properties: { key: { type: 'object' } } };

      expect(generateInterface('ObjectInterface', spec)).toMatchInlineSnapshot(`
        export interface ObjectInterface {
            key?: {
                [key: string]: any;
            };
        }
      `);
    });

    test('works with enum', () => {
      const spec = {
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
      const spec = {
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
