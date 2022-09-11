import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Command } from './Command';

export class CommandManager {
  command!: Command;
  builder: EndpointBuilder<BaseQueryFn, string, string>;

  constructor(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    this.builder = builder;
  }

  setCommand(command: Command) {
    return command.execute(this.builder);
  }
}
