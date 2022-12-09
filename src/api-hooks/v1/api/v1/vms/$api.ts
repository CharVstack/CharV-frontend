import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_vmId@string';
import type { Methods as Methods2 } from './_vmId@string/power';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/vms';
  const PATH1 = '/power';
  const GET = 'GET';
  const POST = 'POST';
  const PATCH = 'PATCH';

  return {
    _vmId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        power: {
          /**
           * VMの電源状態を操作
           * @param option.body - VMの電源状態を操作
           */
          post: (option: { body: Methods2['post']['reqBody']; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send(),
          /**
           * VMの電源状態を操作
           * @param option.body - VMの電源状態を操作
           */
          $post: (option: { body: Methods2['post']['reqBody']; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option)
              .send()
              .then((r) => r.body),
          /**
           * VMの電源状態を取得
           * @returns VMの電源情報
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(
              prefix,
              `${prefix0}${PATH1}`,
              GET,
              option
            ).json(),
          /**
           * VMの電源状態を取得
           * @returns VMの電源情報
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(
              prefix,
              `${prefix0}${PATH1}`,
              GET,
              option
            )
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        /**
         * 個々のVM情報を取得する
         * @returns VMIdに合致するVM情報
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(
            prefix,
            prefix0,
            GET,
            option
          ).json(),
        /**
         * 個々のVM情報を取得する
         * @returns VMIdに合致するVM情報
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option)
            .json()
            .then((r) => r.body),
        /**
         * VM情報を更新する
         * @returns 更新されたVM情報
         */
        patch: (option: { body: Methods1['patch']['reqBody']; config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(
            prefix,
            prefix0,
            PATCH,
            option
          ).json(),
        /**
         * VM情報を更新する
         * @returns 更新されたVM情報
         */
        $patch: (option: { body: Methods1['patch']['reqBody']; config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * VMを作成する
     * @returns 新規作成されたVM情報
     */
    post: (option: { body: Methods0['post']['reqBody']; config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * VMを作成する
     * @returns 新規作成されたVM情報
     */
    $post: (option: { body: Methods0['post']['reqBody']; config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option)
        .json()
        .then((r) => r.body),
    /**
     * 全てのVM一覧を取得する
     * @returns 全てのVM一覧
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 全てのVM一覧を取得する
     * @returns 全てのVM一覧
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
