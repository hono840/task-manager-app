### データベース設計

| カラム名    | 型               | 説明                                        |
| :---------- | :--------------- | :------------------------------------------ |
| id          | uuid (PK)        | タスクを一意に識別する UUID                 |
| title       | text             | タスクのタイトル                            |
| description | text (任意)      | タスクの詳細説明 (任意で OK)                |
| priority    | text または enum | 優先度 (例: low, medium, high)              |
| deadline    | timestamptz      | 期限 (日付・時間)                           |
| tags        | text[] (配列)    | タスクに付与するタグ (複数タグの管理に便利) |
| created_at  | timestamptz      | データ作成日時 (自動で now() を設定)        |
| updated_at  | timestamptz      | データ更新日時 (自動で now() を設定)        |
| status      | text             | 完了か未完了か                              |
