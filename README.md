# Metatags Frontednd

## Overview
![Demo](https://raw.githubusercontent.com/wiki/hatsu38/metatags-frontend/images/MetatagChecker.gif)

フォームに入力されたURLのMetaタグを解析し、GoogleやSNSでの表示を確認できるツールです。解析されたHTMLメタタグのコピーも可能です。

It is a tool that analyzes the Meta tags of the URLs entered into the form, and can check the display on Google and SNS. It is also possible to copy the parsed HTML meta tags.

## Using technology
- react：16.13.1
- node:12.12.0
- firebase：8.2.0

## Development

start up
```
yarn start
```

URL：http://localhost:3000

## Production
URL：https://metatag-check.web.app/

## Deploy
1. Login
```
firebase login
```

2. Build
```
yarn build
```

3. deploy
```
firebase deploy
```


## API used

- Code：https://github.com/hatsu38/metatags-api
- API：https://metatags-api.herokuapp.com/api/v1/scrape?url=
