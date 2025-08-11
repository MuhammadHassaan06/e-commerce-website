"use client";

import React, { useState } from "react";
import LogoutIcon from "../Icons/LogoutIcon";
import { navItems } from "@/app/lib/Sidebar-Data";

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState("users");

  return (
    <div className="flex w-60 justify-center items-center min-w-60 h-209 bg-[#e6ebef]">
      <div className="flex flex-col h-205 w-56 bg-black rounded-3xl justify-between pb-10">
        <div className="pt-15 w-56 flex flex-col gap-24">
          <div className="text-white font-semibold pl-10 text-3xl">Logo</div>
          <div className="flex flex-col items-center gap-1">
            {navItems.map((item) => {
              const isSelected = item.id === selectedId;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`flex flex-row items-center justify-center ${item.paddingClass} w-50 gap-2 rounded-lg h-10 cursor-pointer hover:text-white hover:bg-gray-400`}
                >
                  <item.Icon
                    className={isSelected ? "text-white" : "text-[#878c90]"}
                  />

                  <p
                    className={`text-lg ${
                      isSelected ? "text-white" : "text-[#878c90]"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-row items-center gap-2 justify-center pr-10 w-50 rounded-lg h-10 hover:text-white hover:bg-gray-400">
            <LogoutIcon />
            <p className="text-[#DA6D75CC] text-lg">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
