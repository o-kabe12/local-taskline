import FilterBar from "./components/FilterBar";
import TaskCardArea from "./components/TaskCardArea";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto p-4">
        <FilterBar />
        <TaskCardArea />
      </div>
    </main>
  );
}
