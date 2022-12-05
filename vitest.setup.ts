import '@testing-library/jest-dom';
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import { server } from './src/lib/msw/server';

beforeAll(() => {
  // @ts-ignore
  setGlobalConfig(globalStorybookConfig);
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vitest.clearAllMocks();
});

afterAll(() => {
  server.close();
});
