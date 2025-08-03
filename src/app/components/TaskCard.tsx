import Link from "next/link";
import { Task } from "../lib/types";

const statusStyles = {
  todo: "bg-gray-200 text-gray-800",
  "in-progress": "bg-yellow-200 text-yellow-800",
  done: "bg-green-200 text-green-800",
} as const;

export default function TaskCard({ id ,title, description, status, createdAt, dueDate, assignee }: Task) {
  const displayDate = dueDate ? new Date(dueDate).toLocaleDateString("ja-JP") : null;
  const displayCreatedAt = createdAt ? new Date(createdAt).toLocaleDateString("ja-JP") : null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow mt-4">
      <Link href={`/tasks/${id}`}>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-snug text-gray-900 break-words flex-1">{title}</h3>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusStyles[status]}`}>{
            status === "todo" ? "TODO" : status === "in-progress" ? "進行中" : "完了"
          }</span>
        </div>

        {description && <p className="mt-2 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{description}</p>}

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          {displayCreatedAt && (
            <span>
              作成日: <time dateTime={createdAt}>{displayCreatedAt}</time>
            </span>
          )}
          {displayDate && (
            <span>
              期限: <time dateTime={dueDate}>{displayDate}</time>
            </span>
          )}
          {assignee && (
            <span className="truncate">
              担当: <span className="font-medium text-gray-700">{assignee}</span>
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}