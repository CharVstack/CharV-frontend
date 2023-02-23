# CharV-frontend

[![codecov](https://codecov.io/gh/CharVstack/CharV-frontend/branch/main/graph/badge.svg?token=DHXUIWOFPN)](https://codecov.io/gh/CharVstack/CharV-frontend)

## 開発環境の構築

- node v16
- yarn v1

```bash
yarn install
```

## スクリプト

### プレビュー

```bash
# フロントサーバの開始
yarn start:front
# モックサーバの開始
yarn start:api
```

`http://localhost:3000` をブラウザで開く

### ビルド

```bash
# ./build に出力される
VITE_BACKEND_URL=http://<backend origin> yarn build
```

### 文法チェックとフォーマット

```bash
# 文法チェック
yarn lint

# フォーマット
yarn fix:prettier
yarn fix:eslint
```

### テスト

```bash
yarn test
```

## ドキュメント確認

```bash
# 自動でブラウザが開く
yarn storybook
```

`http://localhsot:6006` をブラウザで開く
