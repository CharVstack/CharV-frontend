import { AspidaMethods } from 'aspida';
import { rest, ResponseResolver, RestContext, RestRequest } from 'msw';

type A1<T> = T extends (a1: infer I) => unknown ? I : never;

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const withBase = (path: string) => (baseURL !== '' && baseURL !== undefined ? new URL(path, baseURL).toString() : path);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Post<Config = any> = {
  post: (option: {
    body: Required<Pick<AspidaMethods, 'post'>>['post']['reqBody'];
    query: Required<Pick<AspidaMethods, 'post'>>['post']['query'];
    config?: Config;
  }) => Promise<Required<Pick<AspidaMethods, 'post'>>['post']['resBody']>;
  $path: () => string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Get<Config = any> = {
  get: (option: {
    body: Required<Pick<AspidaMethods, 'get'>>['get']['reqBody'];
    query: Required<Pick<AspidaMethods, 'get'>>['get']['query'];
    config?: Config;
  }) => Promise<Required<Pick<AspidaMethods, 'get'>>['get']['resBody']>;
  $path: () => string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Put<Config = any> = {
  put: (option: {
    body: Required<Pick<AspidaMethods, 'put'>>['put']['reqBody'];
    query: Required<Pick<AspidaMethods, 'put'>>['put']['query'];
    config?: Config;
  }) => Promise<Required<Pick<AspidaMethods, 'put'>>['put']['resBody']>;
  $path: () => string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Patch<Config = any> = {
  patch: (option: {
    body: Required<Pick<AspidaMethods, 'patch'>>['patch']['reqBody'];
    query: Required<Pick<AspidaMethods, 'patch'>>['patch']['query'];
    config?: Config;
  }) => Promise<Required<Pick<AspidaMethods, 'patch'>>['patch']['resBody']>;
  $path: () => string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Delete<Config = any> = {
  delete: (option: {
    body: Required<Pick<AspidaMethods, 'delete'>>['delete']['reqBody'];
    query: Required<Pick<AspidaMethods, 'delete'>>['delete']['query'];
    config?: Config;
  }) => Promise<Required<Pick<AspidaMethods, 'delete'>>['delete']['resBody']>;
  $path: () => string;
};

export function restPost<T extends Post>(
  api: T,
  resolver: ResponseResolver<RestRequest<A1<T['post']>['body']>, RestContext, Awaited<ReturnType<T['post']>>['body']>
) {
  return rest.post(withBase(api.$path()), resolver);
}

export function restGet<T extends Get>(
  api: T,
  resolver: ResponseResolver<RestRequest<A1<T['get']>['body']>, RestContext, Awaited<ReturnType<T['get']>>['body']>
) {
  return rest.get(withBase(api.$path()), resolver);
}

export function restPut<T extends Put>(
  api: T,
  resolver: ResponseResolver<RestRequest<A1<T['put']>['body']>, RestContext, Awaited<ReturnType<T['put']>>['body']>
) {
  return rest.put(withBase(api.$path()), resolver);
}

export function restPatch<T extends Patch>(
  api: T,
  resolver: ResponseResolver<RestRequest<A1<T['patch']>['body']>, RestContext, Awaited<ReturnType<T['patch']>>['body']>
) {
  return rest.patch(withBase(api.$path()), resolver);
}

export function restDelete<T extends Delete>(
  api: T,
  resolver: ResponseResolver<
    RestRequest<A1<T['delete']>['body']>,
    RestContext,
    Awaited<ReturnType<T['delete']>>['body']
  >
) {
  return rest.delete(withBase(api.$path()), resolver);
}
