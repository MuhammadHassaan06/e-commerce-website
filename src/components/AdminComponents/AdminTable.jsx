"use client";
import React, { useState } from "react";
import NextIcon from "../Icons/NextIcon";
import BackIcon from "../Icons/BackIcon";
import { initialUsers } from "@/app/lib/Dummy-Data";
import EditIcon from "../Icons/EditIcon";
import EyeIcon from "../Icons/EyeIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const CustomCheckbox = ({ checked, onChange, indeterminate }) => (
  <div
    onClick={onChange}
    className={`w-5 h-5 border rounded-md flex items-center justify-center cursor-pointer transition-colors ${
      checked || indeterminate ? "bg-blue-600 border-blue-600" : "bg-gray-200"
    }`}
  >
    {checked && !indeterminate && (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 13l4 4L19 7"
        />
      </svg>
    )}
    {indeterminate && <div className="w-2.5 h-0.5 bg-white"></div>}
  </div>
);
const StatusBadge = ({ text }) => {
  const baseClasses = "px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap";
  const specificClasses = "bg-green-100 text-green-700";
  return <span className={`${baseClasses} ${specificClasses}`}>{text}</span>;
};
const ActionIcons = () => (
  <div className="flex items-center space-x-3 text-gray-500">
    <EditIcon />
    <EyeIcon />
    <DeleteIcon />
  </div>
);
const AdminTable = ({ onSelectionChange }) => {
  const [users, setUsers] = useState(() =>
    initialUsers.map((user, index) => ({ ...user, id: index }))
  );

  const handleUserCheck = (id) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, selected: !user.selected };
      }
      return user;
    });
    setUsers(newUsers);
    if (onSelectionChange) {
      onSelectionChange(newUsers.filter((u) => u.selected).length);
    }
  };

  const handleSelectAll = () => {
    const allChecked = users.length > 0 && users.every((user) => user.selected);
    const newUsers = users.map((user) => ({ ...user, selected: !allChecked }));
    setUsers(newUsers);
    if (onSelectionChange) {
      onSelectionChange(newUsers.filter((u) => u.selected).length);
    }
  };

  const allChecked = users.length > 0 && users.every((user) => user.selected);
  const isIndeterminate = users.some((user) => user.selected) && !allChecked;
  const headers = [
    "Name",
    "Role",
    "Account Status",
    "Verification Status",
    "Registration Date",
    "Action",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md w-full  overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-[1024px]">
          <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-600">
            <div className="flex items-center w-[30%]  ">
              <CustomCheckbox
                checked={allChecked}
                indeterminate={isIndeterminate}
                onChange={handleSelectAll}
              />
              <span className="ml-5">{headers[0]}</span>
            </div>
            <div className="w-[12%]">{headers[1]}</div>
            <div className="w-[15%]">{headers[2]}</div>
            <div className="w-[18%]">{headers[3]}</div>
            <div className="w-[15%]">{headers[4]}</div>
            <div className="w-[10%] text-center">{headers[5]}</div>
          </div>
          <div className="divide-y divide-gray-200">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-2 hover:bg-gray-50 text-sm text-gray-800"
              >
                <div className="flex items-center w-[30%] pl-2">
                  <CustomCheckbox
                    checked={user.selected}
                    onChange={() => handleUserCheck(user.id)}
                  />
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover ml-4"
                  />
                  <div className="pl-3">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </div>
                </div>
                <div className="w-[12%] text-gray-600">{user.role}</div>
                <div className="w-[15%]">
                  <StatusBadge text={user.accountStatus} />
                </div>
                <div className="w-[18%]">
                  {user.verificationStatus !== null ? (
                    <StatusBadge text={user.verificationStatus} />
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
                <div className="w-[15%] text-gray-600">{user.date}</div>
                <div className="w-[10%] flex justify-center">
                  <ActionIcons />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between p-4 border-t border-gray-200 text-sm text-gray-600">
            <div>Showing 1-9 of 100</div>
            <div className="flex items-center space-x-1">
              <button className="px-3 py-2 rounded-md bg-[#25A5B420] hover:bg-gray-100 ">
                <BackIcon />
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-semibold">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-[#25A5B420] hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-[#25A5B420] hover:bg-gray-100">
                ...
              </button>
              <button className="px-3 py-2 rounded-md bg-[#25A5B420] hover:bg-gray-100">
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
