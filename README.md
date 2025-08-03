# LocalTaskline

LocalTasklineは、ローカル完結型のミニマルなタスク管理アプリです。  
実務を想定したプロジェクト管理ツールのUI/UXと設計力を、BaaSを使わずフロントエンド技術のみで構築しました。

---

## 🧑‍💻 使用技術

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | [Next.js 15 (App Router)](https://nextjs.org/) |
| 言語 | TypeScript |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) |
| 状態管理 | [Zustand](https://github.com/pmndrs/zustand) |
| ID生成 | [uuid](https://www.npmjs.com/package/uuid)（v4） |
| データ保存 | localStorage（Zustandで永続化） |

## ✨ 主な機能

- タスクの追加・編集・削除
- ステータス別カンバン表示（ToDo / In Progress / Done）
- ソート・フィルター機能（作成日 / 優先度 / 期日）
- データはlocalStorageに保存され、ブラウザに永続化

---

## 💡 制作目的

業務ツールを想定した構成・設計により、「即戦力」としてのフロントエンドスキルを証明することを目的としています。  
APIやBaaSを使わず、状態管理やロジック構成、UIライブラリ活用など、フロントエンドの力で完結する設計を意識しました。

---

