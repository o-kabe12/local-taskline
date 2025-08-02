'use client';
import Link from "next/link";
import CreateModal from "../CreateModal";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link href="/" className="block w-fit md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400">
          <h1 className="w-fit text-xl font-bold">Local Taskline</h1>
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md md:cursor-pointer md:hover:opacity-70 md:transition-opacity md:duration-400" onClick={() => setIsModalOpen(true)}>
          <span className="text-sm">+ 新規作成</span>
        </button>

        {isModalOpen && <CreateModal setIsModalOpen={setIsModalOpen} />}
      </div>
    </header>
  );
}