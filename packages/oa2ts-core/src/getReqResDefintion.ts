import type { SchemaObject, ReferenceObject, RequestBodyObject } from 'openapi3-ts';

import { isReferenceObject } from './helpers';

export default function getReqResDefintion(
  requestOrResponse: Array<[string, RequestBodyObject | ReferenceObject]>
): Array<ReferenceObject | SchemaObject> {
  return requestOrResponse.map<ReferenceObject | SchemaObject>(([_1, res]) => {
    if (isReferenceObject(res)) {
      return res;
    }

    if (res.content) {
      const content = Object.entries(res.content).find(
        ([mediaType, schema]) =>
          mediaType.startsWith('application/json') ||
          (mediaType.startsWith('application/octet-stream') && schema.schema)
      );

      return content?.[1].schema ? content[1].schema : { type: 'object' };
    }

    return { type: 'object' };
  });
}
