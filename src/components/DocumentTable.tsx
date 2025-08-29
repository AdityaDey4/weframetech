import { ChevronDown } from "lucide-react";
import React from "react";

type Document = {
  name: string;
  size: string;
  type: string;
  typeColor: string;
  aiInclusion: boolean;
  dashboardInclusion: boolean;
  stage: string;
  icon: string;
};

const documents: Document[] = [
  {
    name: "Tech requirements.pdf",
    size: "200 KB",
    type: "Legal",
    typeColor: "bg-blue-100 text-blue-700",
    aiInclusion: true,
    dashboardInclusion: true,
    stage: "Full",
    icon: "/pdf.png",
  },
  {
    name: "Dashboard screenshot.jpg",
    size: "720 KB",
    type: "Vendors & Assets",
    typeColor: "bg-green-100 text-green-700",
    aiInclusion: true,
    dashboardInclusion: true,
    stage: "Onboarding",
    icon: "/pdf.png",
  },
  {
    name: "Dashboard prototype recording.mp4",
    size: "16 MB",
    type: "Technology",
    typeColor: "bg-orange-100 text-orange-700",
    aiInclusion: false,
    dashboardInclusion: true,
    stage: "Franchisee",
    icon: "/doc.png",
  },
  {
    name: "Financial Overview",
    size: "4.2 MB",
    type: "Financial",
    typeColor: "bg-pink-100 text-pink-700",
    aiInclusion: true,
    dashboardInclusion: true,
    stage: "Prospect",
    icon: "/doc.png",
  },
  {
    name: "UX Design Guidelines.docx",
    size: "400 KB",
    type: "Legal",
    typeColor: "bg-blue-100 text-blue-700",
    aiInclusion: true,
    dashboardInclusion: false,
    stage: "Onboarding",
    icon: "/doc.png",
  },
  {
    name: "Dashboard interaction.aep",
    size: "12 MB",
    type: "Legal",
    typeColor: "bg-blue-100 text-blue-700",
    aiInclusion: true,
    dashboardInclusion: true,
    stage: "Onboarding",
    icon: "/pdf.png",
  },
  {
    name: "Briefing call recording.mp3",
    size: "18.6 MB",
    type: "Financial",
    typeColor: "bg-pink-100 text-pink-700",
    aiInclusion: false,
    dashboardInclusion: false,
    stage: "Prospect",
    icon: "/doc.png",
  },
];

const DocumentTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full text-sm text-left">
        <thead className="text-sm font-medium bg-gray-50 border-b">
          <tr className="text-gray-500">
            <th className="px-4 py-3">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="px-4 py-3">Document Name</th>
            <th className="px-4 py-3">Document Type</th>
            <th className="px-4 py-3">AI App Inclusion</th>
            <th className="px-4 py-3">Dashboard Inclusion</th>
            <th className="px-4 py-3">Stage Access</th>
            <th className="px-4 py-3 text-right" />
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-500">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="px-4 py-3 flex items-center gap-3 text-gray-500">
                <img src={doc.icon} alt="icon" className="w-6 h-6" />
                <div>
                  <div className="font-medium">{doc.name}</div>
                  <div className="text-xs text-gray-400">{doc.size}</div>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${doc.typeColor}`}
                >
                  {doc.type}
                </span>
              </td>
              <td className="px-4 py-3">
                <img
                  src={doc.aiInclusion ? "toogle_on.png" : "toogle_off.png"}
                  alt="toogle"
                  className="w-10 h-6"
                />
              </td>

              <td className="px-4 py-3">
                <img
                  src={
                    doc.dashboardInclusion
                      ? "toogle_on.png"
                      : "toogle_off.png"
                  }
                  alt="toogle"
                  className="w-10 h-6"
                />
              </td>
              <td className="px-4 py-3">
                <div className="flex justify-between border p-2 rounded-2xl">
                    <span className="text-gray-500 ">{doc.stage}</span>
                    <ChevronDown className="text-gray-500"/>
                </div>
              </td>
              <td className="px-4 py-3 text-right flex gap-3 justify-end ">
                <button className="text-red-500 text-sm">Delete</button>
                <button className="text-blue-500 text-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
