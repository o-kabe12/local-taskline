import { useState } from "react";
import { useTaskStore } from "../lib/store";
import { Task } from "../lib/types";
import { v4 as uuidv4 } from "uuid";

export default function CreateModal({ setIsModalOpen }: { setIsModalOpen: (value: boolean) => void }) {
  const addTask = useTaskStore((state) => state.addTask);
  const [formData, setFormData] = useState<Omit<Task, "id" | "createdAt">>({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
    assignee: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...formData,
    };

    addTask(newTask);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-[90%] max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-lg font-bold">Create Task</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsModalOpen(false)}>Close</button>
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400">作成</button>
        </form>
      </div>
    </div>
  );
}