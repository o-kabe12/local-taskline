import { Task } from "../lib/types";

export default function EditModal({ setIsModalOpen, task }: { setIsModalOpen: (value: boolean) => void, task: Task }) {
  return (
    <div className="fixed inset-0 bg-black bg-black/70 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md max-w-[1200px] w-[90%]">
        <div className="w-[90%] mx-auto max-w-[1000px]">
          <div className="flex justify-between items-center">
            <h2 className="text-black text-lg font-bold">Edit Task</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>

          <form className="flex flex-col gap-4 mt-4">
            <div>
              <label htmlFor="title" className="text-black">Title</label>
              <input type="text" id="title" name="title" className="w-full p-2 rounded-md border border-gray-300 text-black" defaultValue={task.title} />
            </div>
            <div>
              <label htmlFor="description" className="text-black">Description</label>
              <textarea id="description" name="description" className="w-full p-2 rounded-md border border-gray-300 text-black min-h-[100px]" defaultValue={task.description} />
            </div>
            <div>
              <label htmlFor="status" className="text-black">Status</label>
              <select id="status" name="status" className="w-full p-2 rounded-md border border-gray-300 text-black" defaultValue={task.status}>
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>  
            <div>
              <label htmlFor="dueDate" className="text-black">Due Date</label>
              <input type="date" id="dueDate" name="dueDate" className="w-full p-2 rounded-md border border-gray-300 text-black" defaultValue={task.dueDate} />
            </div>
            <div>
              <label htmlFor="assignee" className="text-black">Assignee</label>
              <input type="text" id="assignee" name="assignee" className="w-full p-2 rounded-md border border-gray-300 text-black" defaultValue={task.assignee}/>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}