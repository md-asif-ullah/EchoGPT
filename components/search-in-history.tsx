"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdDelete, MdOutlineShare } from "react-icons/md";

const SearchInHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<
    { messages: { role: string; content: string }[] }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [userMessage, setUserMessage] = useState<any[]>([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/chat");
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const messages: any[] = [];
    for (const chat of data) {
      const userMessages = chat.messages.filter(
        (roles) => roles.role === "user"
      );
      messages.push(...userMessages);
    }
    setUserMessage(messages);
  }, [data]);
  return (
    <div className=" w-full mt-10 px-4 justify-center items-center flex flex-col">
      {loading && <span className=" dark:text-white">Loading..</span>}
      <div className="flex flex-col md:flex-row items-center justify-center lg:w-[500px] xl:w-[800px]">
        <div className="relative w-full">
          <input
            className="px-4 py-3.5 rounded-xl border border-[#373341] w-full pl-[40px] outline-none focus:border-[#7650ec] focus:ring-2 focus:ring-[#7650ec] transition placeholder:text-[#939aa6] placeholder:text-lg"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[1.7rem] dark:text-white" />
        </div>

        <div className="relative ml-4 mt-5 md:mt-0">
          <button
            onClick={toggleDropdown}
            className="flex items-center rounded-xl justify-between py-4 px-4 text-base w-[120px] font-medium dark:text-white border border-[#373341]"
            type="button"
          >
            All
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {["Mockups", "Templates", "Design", "Logos"].map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* fetch chats history data */}

      <div className="w-full lg:w-[500px] xl:w-[800px] relative">
        <div className="space-y-4  mt-14">
          {userMessage.length < 10 &&
            userMessage?.map((msg, msgIdx) => (
              <div
                key={`${msgIdx}`}
                className="dark:bg-[#131119] bg-white p-3 rounded-xl w-full flex justify-between items-center "
              >
                {/* Left Section: Image and Message */}
                <div className="flex items-center space-x-4">
                  <div className="">
                    <Image
                      src="/icons/icon.png"
                      alt="logo"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold dark:text-white text-black">
                      {msg.content}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">
                      Last Updated: Mar 7, 2025 9:39 PM
                    </p>
                  </div>
                </div>

                {/* Right Section: Action Buttons */}
                <div className="flex space-x-4">
                  <button className="bg-[#1c3a82] p-3 rounded-full transition duration-200">
                    <MdOutlineShare className="text-white text-xl" />
                  </button>
                  <button className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition duration-200">
                    <MdDelete className="text-white text-xl" />
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="xl:w-[800px] absolute bottom-0 left-0 right-0">
          <div className=" bg-gradient-to-b from-[#e6e5fe] to-[#6a6df1] dark:from-[#1f1e3b] dark:to-[#6063e9] opacity-80 p-6 text-center mt-4 h-40 pt-16">
            <button className="bg-[#6f23fd] cursor-pointer px-4 py-2 rounded-lg text-white font-semibold mb-2">
              Upgrade
            </button>
            <p className="text-white text-base font-bold mt-4">
              To view your complete history, please upgrade to unlock full
              access and enjoy additional features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInHistory;
