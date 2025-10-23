import React, { useState } from "react";
import {
  Menu,
  TrendingUp,
  Users,
  FileText,
  ClipboardCheck,
  BarChart3,
  Wallet,
  DollarSign,
  Settings,
} from "lucide-react";
import colors from "../constants/colors";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Recent Trend", icon: <TrendingUp size={20} /> },
    { name: "Creators", icon: <Users size={20} /> },
    { name: "Application", icon: <FileText size={20} /> },
    { name: "KYC Reviews", icon: <ClipboardCheck size={20} /> },
    { name: "User Analytics", icon: <BarChart3 size={20} /> },
    { name: "Payouts", icon: <Wallet size={20} /> },
    { name: "Payout Request", icon: <DollarSign size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Menu icon (always visible) */}
      <div
        className="p-4 cursor-pointer fixed top-4 left-4 z-50 rounded-md bg-white/10 hover:bg-white/20 transition"
        onClick={() => setOpen(!open)}
      >
        <Menu color={colors.textPrimary} size={18} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#11162a] pt-10 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40 p-6`}
      >
        <div className="mt-10">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-md mb-1 cursor-pointer hover:bg-white/10 ${
                item.name === "Recent Trend" ? "text-[#FFD700]" : "text-gray-300"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
