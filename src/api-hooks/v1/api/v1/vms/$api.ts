import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_vmId@string';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/vms';
  const GET = 'GET';
  const POST = 'POST';
  const PATCH = 'PATCH';

  return {
    _vmId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 個々のVM情報を取得する
         * @returns OK
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
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option)
            .json()
            .then((r) => r.body),
        /**
         * VM情報を更新する
         */
        patch: (option: { body: Methods1['patch']['reqBody']; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        /**
         * VM情報を更新する
         */
        $patch: (option: { body: Methods1['patch']['reqBody']; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * VMを作成する
     */
    post: (option: { body: Methods0['post']['reqBody']; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    /**
     * VMを作成する
     */
    $post: (option: { body: Methods0['post']['reqBody']; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option)
        .send()
        .then((r) => r.body),
    /**
     * 全てのVM一覧を取得する
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 全てのVM一覧を取得する
     * @returns OK
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
