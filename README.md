# アプリケーションの説明
ミーティングの管理ができるアプリ（取得、作成、編集、削除）<br>

# 技術構成
・React<br>
・TypeScript<br>
・Storybook<br>
・Jest<br>
・Cypress<br>
・styled-components<br>
・emotion<br>
・CSS Modules<br>
・react-hook-form<br>
・zod<br>
・MUI<br>
・ESLint<br>
・Prettier<br>
・php（Laravel）<br>

# 機能
・会議一覧<br>
・会議詳細<br>
・会議検索<br>
・会議作成<br>
・会議編集<br>
・会議削除<br>
・ログイン<br>
・ログアウト<br>
・会員登録<br>

# 環境構築

## フロントエンド
・frontend/.env.sample をコピーして、frontend/.env を作成<br>
`touch frontend/.env`<br>

・フロントエンドのアプリを起動<br>
`cd frontend`<br>
`npm run dev`<br>
`url: http://localhost:5173`<br>

・storybookを起動<br>
`npm run storybook`<br>

・単体テストを実行<br>
`npm run test`

・E2Eテストを実行<br>
`npx cypress open`

・型を生成<br>
`npm run generate:api`

## バックエンド
・Dockerを起動する<br>
`docker-compose up -d --build`<br>

・phpコンテナに入る<br>
`docker-compose exec php bash`<br>

・コンポーザーをインストールする<br>
`composer install`<br>

・env.exampleファイルから.envを作成し、環境変数を変更する<br>

このときenvファイルの内容は以下としてください。<br>
DB_HOST=mysql<br>
DB_DATABASE=laravel_db<br>
DB_USERNAME=laravel_user<br>
DB_PASSWORD=laravel_pass<br>

・アプリケーションキーを生成する<br>
`php artisan key:generate`<br>

・マイグレーションを実行する<br>
`php artisan migrate`<br>

・シーディングを実行する<br>
`php artisan db:seed`<br>


