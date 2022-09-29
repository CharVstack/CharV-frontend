import type { Methods as Methods0 } from './host';
import type { Methods as Methods1 } from './vms';
import type { Methods as Methods2 } from './vms/_vmId@string';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/host';
  const PATH1 = '/api/v1/vms';
  const GET = 'GET';
  const POST = 'POST';
  const PATCH = 'PATCH';

  return {
    host: {
      /**
       * ホスト情報を取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * ホスト情報を取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    vms: {
      _vmId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * 個々のVM情報を取得する
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          /**
           * 個々のVM情報を取得する
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          /**
           * VM情報を更新する
           */
          patch: (option: { body: Methods2['patch']['reqBody']; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * VM情報を更新する
           */
          $patch: (option: { body: Methods2['patch']['reqBody']; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * VMを作成する
       */
      post: (option: { body: Methods1['post']['reqBody']; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * VMを作成する
       */
      $post: (option: { body: Methods1['post']['reqBody']; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option)
          .send()
          .then((r) => r.body),
      /**
       * 全てのVM一覧を取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 全てのVM一覧を取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;