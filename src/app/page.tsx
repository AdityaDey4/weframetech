"use client";
import MainView from "@/components/MainView";
import Slidebar from "@/components/Slidebar";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex bg-white overflow-x-auto">
      {/* Sidebar */}
      <div
        className={`fixed z-10 md:static top-0 left-0 min-h-full min-w-54 bg-[#11455D] text-white transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button (Mobile only) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-3xl md:hidden"
        >
          ×
        </button>

        <Slidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* header  */}
        <header className="flex justify-end gap-4 p-4 pr-6 border-2 border-gray-200">
          <img src="settings.png" className="w-10 h-10"/>
          <img src="profile.png" className="w-10 h-10"/>

          <div className="flex items-center md:hidden rounded-3xl cursor-pointer">
            <img
            src={'three_line.png'}
              onClick={() => setOpen(!open)}
              className="text-2xl focus:outline-none w-8 h-8"
            />
          </div>
        </header>
        <MainView />
      </main>
    </div>
  );
}
