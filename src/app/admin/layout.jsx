import Sidebar from "@/components/AdminComponents/Sidebar";
import React from "react";
import AdminHeader from "@/components/AdminComponents/AdminHeader";
import AdminMain from "@/components/AdminComponents/AdminMain";


const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row bg-[#e6ebef]">
        <Sidebar />
        <div className="bg-[#e6ebef]flex flex-col w-277 h-209">
          <AdminHeader />
          <AdminMain/>
        </div>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
