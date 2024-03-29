import type { Methods as Methods0 } from './host';
import type { Methods as Methods1 } from './vms';
import type { Methods as Methods2 } from './vms/_vmId@string';
import type { Methods as Methods3 } from './vms/_vmId@string/power';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/host';
  const PATH1 = '/api/v1/vms';
  const PATH2 = '/power';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    host: {
      /**
       * ホスト情報を取得する
       * @returns ホストの情報
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * ホスト情報を取得する
       * @returns ホストの情報
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
          power: {
            /**
             * VMの電源状態を操作
             * @param option.body - VMの電源状態を操作
             */
            post: (option: { body: Methods3['post']['reqBody']; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send(),
            /**
             * VMの電源状態を操作
             * @param option.body - VMの電源状態を操作
             */
            $post: (option: { body: Methods3['post']['reqBody']; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option)
                .send()
                .then((r) => r.body),
            /**
             * VMの電源状態を取得
             * @returns VMの電源情報
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(
                prefix,
                `${prefix1}${PATH2}`,
                GET,
                option
              ).json(),
            /**
             * VMの電源状態を取得
             * @returns VMの電源情報
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(
                prefix,
                `${prefix1}${PATH2}`,
                GET,
                option
              )
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          /**
           * 個々のVM情報を取得する
           * @returns VMIdに合致するVM情報
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
           * @returns VMIdに合致するVM情報
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          /**
           * VM情報を更新する
           * @param option.body - VM情報の更新
           * @returns 更新されたVM情報
           */
          patch: (option: { body: Methods2['patch']['reqBody']; config?: T | undefined }) =>
            fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(
              prefix,
              prefix1,
              PATCH,
              option
            ).json(),
          /**
           * VM情報を更新する
           * @param option.body - VM情報の更新
           * @returns 更新されたVM情報
           */
          $patch: (option: { body: Methods2['patch']['reqBody']; config?: T | undefined }) =>
            fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(
              prefix,
              prefix1,
              PATCH,
              option
            )
              .json()
              .then((r) => r.body),
          /**
           * VMを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * VMを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * VMを作成する
       * @param option.body - VMの作成
       * @returns 新規作成されたVM情報
       */
      post: (option: { body: Methods1['post']['reqBody']; config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(
          prefix,
          PATH1,
          POST,
          option
        ).json(),
      /**
       * VMを作成する
       * @param option.body - VMの作成
       * @returns 新規作成されたVM情報
       */
      $post: (option: { body: Methods1['post']['reqBody']; config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option)
          .json()
          .then((r) => r.body),
      /**
       * 全てのVM一覧を取得する
       * @returns 全てのVM一覧
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 全てのVM一覧を取得する
       * @returns 全てのVM一覧
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
