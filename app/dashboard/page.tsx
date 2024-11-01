// page.tsx
import MyResponsiveBar from "@/components/common/BarCharts/Barcharts";
import DashboardLayout from "@/components/common/layout";
import MyResponsivePie from "@/components/common/PieChart/PieChart";
import { Grid2X2Icon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between px-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="bg-gradient p-4 rounded-md w-14 text-white">
            <Grid2X2Icon size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold">Dashboard</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-[#F1F5F9] shadow-lg rounded-lg min-h-[300px]">
          <div className="flex justify-start items-center px-4 py-4 border-b-2 border-dashed border-gray-800">
            <p className="text-2xl font-bold">All Orders</p>
          </div>
          <MyResponsivePie />
        </div>
        <div className="bg-[#F1F5F9] shadow-lg rounded-lg max-h-[450px] pb-10">
          <div className="flex justify-start items-center px-4 py-4 border-b-2 border-dashed border-gray-800">
            <p className="text-2xl font-bold">All Orders</p>
          </div>
          <MyResponsiveBar />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;