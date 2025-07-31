import TaskCard from "./TaskCard";
import { MOCK_TASKS } from "../lib/mockData";


export default function TaskCardArea() {
  const TaskList= MOCK_TASKS;
  
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Todo</h2>
        {TaskList.filter((task) => task.status === "todo").map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">In Progress</h2>
        {TaskList.filter((task) => task.status === "in-progress").map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>

      <div className="bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Done</h2>
        {TaskList.filter((task) => task.status === "done").map((task) => (
          <TaskCard key={task.id} {...task} />
        ))} 
      </div>
    </div>

    // <div>
    //   {TaskList.map((task) => (
    //     <TaskCard key={task.id} {...task} />
    //   ))}
    // </div>
  );
}