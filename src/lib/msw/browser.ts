import { setupWorker } from 'msw';

import { HANDLERS } from './handlers';

export function initWorker() {
  return setupWorker(...Object.values(HANDLERS).map((handler) => handler.success));
}
