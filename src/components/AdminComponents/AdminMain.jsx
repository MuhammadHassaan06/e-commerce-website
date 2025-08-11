import React from "react";
import AdminTable from "./AdminTable";
import Admin1Main from "./Admin1Main";

const AdminMain = () => {
  return (
    <div className="flex flex-col bg-[#e6ebef] w-full h-screen">
      
      <Admin1Main/>
      <div className=" w-full h-auto bg-[#e6ebef] flex items-center justify-center">
      <div className="w-full max-w-7xl bg-[#e6ebef]">
        <AdminTable/>
      </div>
    </div>
    </div>
  );
};

export default AdminMain;
