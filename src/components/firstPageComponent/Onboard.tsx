import React from "react";
import { Circle } from "lucide-react";

const Onboard = () => {
  return (
    <div className="flex flex-col gap-6 bg-white w-96">
      {/* Franchisees Onboard  */}
      <div className="p-6 border rounded-2xl flex flex-col gap-3 shadow-sm">
        <span className="text-black text-lg">Total Franchisees Onboard</span>
        <div className="flex justify-between items-center text-black mt-2">
          <div className="flex gap-4 items-center">
            <span className="text-4xl">14</span>
            <img src="badge_wrap_1.png" />
          </div>
          <img src={"group.png"} />
        </div>
        <img src={"horizontal.png"} className="mt-3"/>
        
        {/* Three Stages  */}
        <div className="flex justify-between items-center text-black mt-5">
          <div className="flex items-center gap-3">
            <Circle size={14} fill="#1F7EAA" className="text-gray-400" />
            <span className="text-gray-400 text-md">Stage 1 (Initial Inquiry)</span>
          </div>
          <span className="text-xl">02</span>
        </div>
        <div className="flex justify-between items-center text-black">
          <div className="flex items-center gap-3">
            <Circle size={14} fill="#2FBDFF" className="text-gray-400" />
            <span className="text-gray-400 text-md">Stage 2 (Document Submission)</span>
          </div>
          <span className="text-xl">07</span>
        </div>
        <div className="flex justify-between items-center text-black">
          <div className="flex items-center gap-3">
            <Circle size={14} fill="#97DEFF" className="text-gray-400" />
            <span className="text-gray-400 text-md">Stage 3 (Training)</span>
          </div>
          <span className="text-xl">05</span>
        </div>
      </div>
      {/* Financial Wellbeing  */}
      <div className="p-6 border rounded-2xl shadow-sm">

        <div className="flex flex-col gap-4 border-b pb-3">
            <span className="text-black text-lg">Financial Wellbeing</span>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-black text-4xl">20</span>
                    <span className="text-gray-500 text-sm">Total Franchisees</span>
                </div>
                <img src={"badge_wrap_2.png"}/>
            </div>
        </div>
        <div className="flex justify-around mt-6">
            <div className="flex p-5 flex-col items-center bg-gray-100 rounded-2xl gap-2">
                <span className="text-sm text-gray-600">Target</span>
                <span className="text-2xl text-black">$500,000</span>
            </div>
            <div className="flex p-5 flex-col items-center bg-gray-100 rounded-2xl gap-2">
                <span className="text-sm text-gray-600">Current</span>
                <span className="text-2xl text-black">$450,000</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
