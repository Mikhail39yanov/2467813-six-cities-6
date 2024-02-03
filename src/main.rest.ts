import 'reflect-metadata';
import { RestApplication, createRestApplicationContainer } from './rest/index.js';
import { Container } from 'inversify';
import { Component } from './shared/const/index.js';
import { createUserContainer } from './shared/modules/user/index.js';

async function bootstrap() {
  const appContainer = Container.merge(createRestApplicationContainer(), createUserContainer());

  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
