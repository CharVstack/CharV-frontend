import '@testing-library/jest-dom';
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import { server } from './src/lib/msw/server';

beforeAll(async () => {
  // @ts-ignore
  setGlobalConfig(globalStorybookConfig);
  return server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
