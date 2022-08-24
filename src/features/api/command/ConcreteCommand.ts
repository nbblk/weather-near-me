import { QueryParams } from '@common/types/types';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Command } from './Command';

export class ConcreteCommand implements Command {
  builder: EndpointBuilder<BaseQueryFn, string, string>;

  constructor(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    this.builder = builder;
  }

  execute(endpointDefinition: {
    query: () => string;
    transformResponse: () => {};
  }) {
    return this.builder.query<any, QueryParams>(endpointDefinition);
  }
}
