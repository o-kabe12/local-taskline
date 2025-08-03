'use client';

import { useState, useEffect } from "react";
import { useTaskStore } from "../lib/store";
import { Task } from "../lib/types";

export default function EditModal({
  task,
  setIsModalOpen,
}: {
  task: Task;
  setIsModalOpen: (value: boolean) => void;
}) {
  
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);

  const targetTask = tasks.find((t) => t.id === task.id);

  const [formData, setFormData] = useState<Omit<Task, "id" | "createdAt">>({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
    assignee: "",
  });

  useEffect(() => {
    if (targetTask) {
      const { title, description, status, dueDate, assignee } = targetTask;
      setFormData({ title, description, status, dueDate, assignee });
    }
  }, [targetTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetTask) return;

    const updatedTask: Task = {
      ...targetTask,
      ...formData,
    };

    updateTask(updatedTask);
    setIsModalOpen(false);
  };

  if (!targetTask) return <div className="text-white">タスクが見つかりません</div>;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-[90%] max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-lg font-bold">タスク編集</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsModalOpen(false)}>閉じる</button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 text-black" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 text-black" required />
          <select name="status" value={formData.status} onChange={handleChange} className="border p-2 text-black">
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <input name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} className="border p-2 text-black" />
          <input name="assignee" value={formData.assignee} onChange={handleChange} placeholder="Assignee" className="border p-2 text-black" />
          <button type="submit" className="bg-green-500 text-white p-2 rounded md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400">更新</button>
        </form>
      </div>
    </div>
  );
}
