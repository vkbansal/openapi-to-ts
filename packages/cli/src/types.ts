import type { TypeDefinitionWithExports } from '@vkbansal/oa2ts-core';
import type { Statement } from 'typescript';

export type TypeDefinition = TypeDefinitionWithExports<Statement | Statement[]>;
