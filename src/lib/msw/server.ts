import { setupServer } from 'msw/node';

import { HANDLERS } from './handlers';

export * from 'msw';

export const server = setupServer(...Object.values(HANDLERS).map((handler) => handler.success));
