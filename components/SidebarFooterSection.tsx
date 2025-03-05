"use client";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CiHome, CiSettings } from "react-icons/ci";
import { ModeToggle } from "./mode-toggle";
import { GoShareAndroid } from "react-icons/go";

const SidebarFooterSection = () => {
  return (
    <SidebarFooter className="px-10 dark:bg-[#131119] bg-[#f7f5ff] border-t border-[#e7dbff] dark:border-gray-700">
      <SidebarMenu>
        <SidebarMenuItem className="flex items-center justify-between dark:text-white text-black">
          <CiHome className="text-2xl" />
          <GoShareAndroid className="text-2xl" />
          <CiSettings className="w-6 h-6" />
          <ModeToggle />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SidebarFooterSection;
