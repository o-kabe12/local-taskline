'use client';
import { MOCK_TASKS } from "@/app/lib/mockData";
import React, { useEffect, useState } from 'react';

export default function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  const task = id ? MOCK_TASKS.find((task) => task.id === id) : null;

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-6 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">{task.description}</p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-700">Status:</span>
            <span className={`px-2 py-1 rounded-full text-sm ${task.status === 'done' ? 'bg-green-200 text-green-800' : task.status === 'in-progress' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>
              {task.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block font-semibold text-gray-700">Created At:</span>
              <span className="text-gray-600">{task.createdAt}</span>
            </div>
            <div>
              <span className="block font-semibold text-gray-700">Due Date:</span>
              <span className="text-gray-600">{task.dueDate}</span>
            </div>
          </div>
          <div>
            <span className="block font-semibold text-gray-700">Assignee:</span>
            <span className="text-gray-600">{task.assignee}</span>
          </div>
        </div>
      </div>
    </div>
  );
}