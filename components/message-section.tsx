import Image from "next/image";
import React from "react";

interface props {
  messages: Message[];
  modelContent: Items;
}

const MessagesSection = ({ messages, modelContent }: props) => {
  return (
    <div className=" p-4 rounded-lg h-80 overflow-y-auto w-full sm:w-[400px] md:w-[450px] lg:w-[600px] xl:w-[780px] flex flex-col gap-2 custom-scrollbar">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`p-3 rounded-lg flex items-start`}>
            {msg.role !== "user" && (
              <Image
                src={modelContent.img}
                alt="Logo"
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
            )}
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesSection;
