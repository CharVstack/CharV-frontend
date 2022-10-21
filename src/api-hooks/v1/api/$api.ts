import type { Methods as Methods0 } from './v1/host';
import type { Methods as Methods1 } from './v1/vms';
import type { Methods as Methods2 } from './v1/vms/_vmId@string';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/host';
  const PATH1 = '/api/v1/vms';
  const GET = 'GET';
  const POST = 'POST';
  const PATCH = 'PATCH';

  return {
    v1: {
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
        _vmId: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            /**
             * 個々のVM情報を取得する
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(
                prefix,
                prefix2,
                GET,
                option
              ).json(),
            /**
             * 個々のVM情報を取得する
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            /**
             * VM情報を更新する
             */
            patch: (option: { body: Methods2['patch']['reqBody']; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix2, PATCH, option).send(),
            /**
             * VM情報を更新する
             */
            $patch: (option: { body: Methods2['patch']['reqBody']; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix2, PATCH, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * VMを作成する
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
         * @returns 新規作成されたVM情報
         */
        $post: (option: { body: Methods1['post']['reqBody']; config?: T | undefined }) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option)
            .json()
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
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
