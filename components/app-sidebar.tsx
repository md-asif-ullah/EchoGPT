"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import SidebarFooterSection from "./SidebarFooterSection";
import { TiMessages } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbApiApp } from "react-icons/tb";
import { RxCross1, RxDiscordLogo } from "react-icons/rx";
import Image from "next/image";

type SidebarItem = {
  title: string;
  icon: JSX.Element;
  url: string;
};

type SidebarGroup = {
  name: string;
  items?: SidebarItem[];
};

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems: SidebarGroup[] = [
    {
      name: "Engagement",
      items: [
        { title: "History", icon: <TiMessages />, url: "/history" },
        {
          title: "Store",
          icon: <RiDeleteBin6Line />,
          url: "/store",
        },
        {
          title: "Ai Tasks",
          icon: <HiOutlineSquares2X2 />,
          url: "/ai-tasks",
        },
      ],
    },
    {
      name: "Help & Support",
      items: [
        {
          title: "Support",
          icon: <TiMessages />,
          url: "/support",
        },
        {
          title: "subscriptions",
          icon: <MdOutlineSubscriptions />,
          url: "/subscriptions",
        },
        {
          title: "Api Platfrom",
          icon: <TbApiApp />,
          url: "/subscriptions",
        },
        {
          title: "discord",
          icon: <RxDiscordLogo />,
          url: "/subscriptions",
        },
      ],
    },
  ];

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-4 left-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenuOutline className="md:hidden text-[#6f23fd] text-4xl border border-[#6f23fd]" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative transition-transform duration-300 ease-in-out h-screen bg-[#f7f5ff] dark:bg-[#131119]`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mx-5 h-20">
            <div className="flex items-center space-x-2">
              <Image
                src="/icons/sidebarDarkLogo.png"
                alt="Logo"
                width={250}
                height={200}
                className="hidden dark:block"
              />
              <Image
                src="/icons/sidebarLightLogo.png"
                alt="Logo"
                width={250}
                height={200}
                className="dark:hidden"
              />
            </div>
            {/* Close button for mobile */}
            <button
              className="text-[#6a22f1] border-2 border-[#6a22f1] rounded-full p-1 text-xs font-semibold md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            <button className="w-full border cursor-pointer dark:border-white border-[#d1bff5] text-[#6c22f5] flex items-center justify-center py-2 px-3 rounded-xl">
              <i className="text-2xl">
                <HiOutlinePencilAlt />
              </i>
              <span className="ml-2 text-lg">New Post</span>
            </button>

            {sidebarItems.map((item, index) => (
              <div key={index}>
                <h2 className="text-xs font-semibold mt-6">{item.name}</h2>
                {item.items && (
                  <ul className="space-y-2 mt-5">
                    {item.items.map((subItem, index) => (
                      <li key={index}>
                        <Link
                          href={subItem.url}
                          className="px-4 py-2 text-gray-700 dark:hover:bg-[#241d3a] hover:bg-[#e7dbff] duration-500 font-semibold dark:text-white rounded flex items-center"
                        >
                          {subItem.icon}
                          <span className="ml-2">{subItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <SidebarFooterSection />
        </div>
      </aside>
    </>
  );
}
