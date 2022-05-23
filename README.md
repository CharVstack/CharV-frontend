# CharV-frontend

## 開発環境の構築

```shell
yarn install
```

## スクリプト

開発

`http://localhost:3000` をブラウザで開く

```shell
# フロントサーバの開始
yarn start:front
# モックサーバの開始
yarn start:api
```

ビルド

```shell
yarn build
```

文法チェックとフォーマット

```shell
# 文法チェック
yarn lint

# フォーマット
yarn fix:prettier
yarn fix:eslint
```

テスト

```shell
yarn test
```
