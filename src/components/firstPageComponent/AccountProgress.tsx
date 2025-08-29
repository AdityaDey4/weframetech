import React from "react";
import { CheckCircle, XCircle, Circle } from "lucide-react"; 

const AccountProgress = () => {
  return (
    <div className="flex flex-col p-6 border rounded-2xl shadow-sm bg-white min-w-86">
      {/* Top Tier */}
      <div className="border-b pb-6 flex flex-col items-center">
        <span className="text-black text-lg">
          Account Progress
        </span>

        {/* Progress Circle */}
        <div className="relative flex items-center justify-center mt-6">
          <svg className="w-28 h-28 transform -rotate-90">
            <circle
              className="text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="56"
              cy="56"
            />
            <circle
              className="text-blue-500"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="56"
              cy="56"
              strokeDasharray={2 * Math.PI * 50}
              strokeDashoffset={2 * Math.PI * 50 * (1 - 0.85)}
            />
          </svg>
          <span className="absolute text-xl font-semibold text-black">85%</span>
        </div>
      </div>

      {/* Steps Completed */}
      <div className="flex flex-col bg-gray-100 rounded-2xl p-4 text-black mt-4">
        <span className="font-medium">Steps Completed</span>
        <div className="pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Circle size={14} className="text-gray-400" />
              <span>Profile Setup</span>
            </div>
            <CheckCircle size={16} className="text-green-500" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Circle size={14} className="text-gray-400" />
              <span>Initial Training</span>
            </div>
            <CheckCircle size={16} className="text-green-500" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Circle size={14} className="text-gray-400" />
              <span>Legal Documents</span>
            </div>
            <CheckCircle size={16} className="text-green-500" />
          </div>
        </div>
      </div>

      {/* Steps Remaining */}
      <div className="flex flex-col bg-gray-100 rounded-2xl p-4 text-black mt-4">
        <span className="font-medium">Steps Remaining</span>
        <div className="pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Circle size={14} className="text-gray-400" />
              <span>Financial Integration</span>
            </div>
            <XCircle size={16} className="text-red-500" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Circle size={14} className="text-gray-400" />
              <span>Final Review</span>
            </div>
            <XCircle size={16} className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProgress;
