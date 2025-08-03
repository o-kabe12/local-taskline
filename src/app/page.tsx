'use client';
import { useState } from "react";
import FilterBar from "./components/FilterBar";
import TaskCardArea from "./components/TaskCardArea";
import { useTaskStore } from "./lib/store";

export default function Home() {
  const tasks = useTaskStore((state) => state.tasks);
  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredAndSortedTasks = [...tasks]
    .filter((task) => task.title.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      switch (sortOrder) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'a-z':
          return a.dueDate?.localeCompare(b.dueDate || '') || 0;
        case 'z-a':
          return b.dueDate?.localeCompare(a.dueDate || '') || 0;
        default:
          return 0;
      }
    });

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto p-4">
        <FilterBar
          filterText={filterText}
          setFilterText={setFilterText}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}        
        />
        <TaskCardArea filteredAndSortedTasks={filteredAndSortedTasks} />
      </div>
    </main>
  );
}
