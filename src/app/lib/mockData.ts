
import { Task } from './types';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'SERNのドキュメントを翻訳',
    description: 'SERNのドキュメントを翻訳する。',
    status: 'in-progress',
    createdAt: '2025-07-30',
    dueDate: '2025-08-01',
    assignee: '牧瀬紅莉栖'
  },
  {
    id: '2',
    title: '実験器具の準備',
    description: 'オカリンが壊した実験器具の補充。',
    status: 'todo',
    createdAt: '2025-07-29',
    dueDate: '2025-08-01',
    assignee: '椎名まゆり'
  },
  {
    id: '3',
    title: 'SERNをハッキング',
    description: 'SERNをハッキングして、未来ガジェットを開発する。',
    status: 'done',
    createdAt: '2025-07-28',
    dueDate: '2025-08-01',
    assignee: '橋田至'
  },
  {
    id: '4',
    title: '未来ガジェットの開発',
    description: '未来ガジェットの開発。',
    status: 'todo',
    createdAt: '2025-07-28',
    dueDate: '2025-08-01',
    assignee: '鳳凰院凶真'
  },
];