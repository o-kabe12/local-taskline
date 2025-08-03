import { useTaskStore } from "../lib/store";
import { useRouter } from "next/navigation";

export default function DeleteModal({
  setIsDeleteModalOpen,
  taskId,
}: {
  setIsDeleteModalOpen: (value: boolean) => void;
  taskId: string;
}) {

  const router = useRouter();
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleDelete = () => {
    deleteTask(taskId);
    setIsDeleteModalOpen(false);
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-[90%] max-w-xl">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-black text-lg font-bold">Delete Task</h2>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsDeleteModalOpen(false)}>キャンセル</button>
        </div>
        <p className="text-black text-lg font-bold mb-10 text-center">本当に削除しますか？</p>
        <div className="flex justify-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={handleDelete}>削除</button>
        </div>
      </div>
    </div>
  );
}
