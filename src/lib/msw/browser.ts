import { setupWorker } from 'msw';

import { HANDLERS } from './handlers';

export function initWorker() {
  return setupWorker(
    ...Object.values(HANDLERS).flatMap((handler) =>
      Array.isArray(handler.success) ? handler.success.map((res) => res) : handler.success
    )
  );
}
