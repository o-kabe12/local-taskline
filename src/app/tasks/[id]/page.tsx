'use client';
import DeleteModal from "@/app/components/DeleteModal";
import EditModal from "@/app/components/EditModal";
import { useTaskStore } from "@/app/lib/store";
import React, { useEffect, useState } from 'react';

export default function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  const task = useTaskStore((state) => state.tasks.find((task) => task.id === id));

  if (!task) {
    return <div>Task not found</div>;
  }
  
  return (
    <div className="max-w-[1200px] mx-auto p-6 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h1>
          <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsModalOpen(true)}>編集</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsDeleteModalOpen(true)}>削除</button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">{task.description}</p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-700">状態:</span>
            <span className={`px-2 py-1 rounded-full text-sm ${task.status === 'done' ? 'bg-green-200 text-green-800' : task.status === 'in-progress' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>
              {task.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block font-semibold text-gray-700">作成日:</span>
              <span className="text-gray-600">{task.createdAt}</span>
            </div>
            <div>
              <span className="block font-semibold text-gray-700">期限:</span>
              <span className="text-gray-600">{task.dueDate}</span>
            </div>
          </div>
          <div>
            <span className="block font-semibold text-gray-700">担当者:</span>
            <span className="text-gray-600">{task.assignee}</span>
          </div>
        </div>
      </div>

      {isModalOpen && <EditModal setIsModalOpen={setIsModalOpen} task={task} />}
      {isDeleteModalOpen && <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} taskId={task.id} />}
    </div>
  );
}