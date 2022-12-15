import { setupServer } from 'msw/node';

import { HANDLERS } from './handlers';

export * from 'msw';

export const server = setupServer(
  ...Object.values(HANDLERS).flatMap((handler) =>
    Array.isArray(handler.success) ? handler.success.map((res) => res) : handler.success
  )
);
