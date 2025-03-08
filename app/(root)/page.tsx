"use client";

import { useState } from "react";
import axios from "axios";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";
import PlanSection from "@/components/plan-section";
import FeaturesSection from "@/components/feature-section";
import MessagesSection from "@/components/message-section";
import { useSearchParams } from "next/navigation";
import LoadingAnimaiton from "@/components/loading-animation";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [modelContent, setModelContent] = useState<Items>({
    img: "/icons/icon.png",
    title: "EchoGPT",
    description:
      "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
  });

  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const model = searchParams.get("model");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const newMessage = { role: "user", content: input };

    try {
      const response = await axios.post("/api/chat", {
        messages: [...messages, newMessage],
        userId: "12345",
        id,
        chatModel: model,
      });

      const botReply = {
        role: "assistant",
        content: response.data.content || "I'm not sure how to respond.",
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, botReply]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="dark:bg-[#18161f] bg-white w-full min-h-[89vh] flex justify-center items-center overflow-hidden">
      <div className="max-w-[820px] p-4">
        <div className="flex flex-col items-center space-y-10 overflow-auto h-[350px] custom-scrollbar ">
          {messages.length > 1 ? (
            <MessagesSection messages={messages} modelContent={modelContent} />
          ) : (
            <FeaturesSection modelContent={modelContent} />
          )}
        </div>

        <section className="p-5 border dark:border-[#2b303e] border-b-neutral-50 rounded-2xl mt-5">
          <PlanSection
            setModelContent={setModelContent}
            modelContent={modelContent}
          />
          <div className="flex border border-b-neutral-50 dark:border-[#2b303e]  rounded-xl">
            <HiOutlineSwitchVertical className="text-gray-500 text-2xl ml-4 mt-4" />

            <textarea
              className="rounded-lg w-full lg:mx-5 text-black dark:text-gray-100 resize-none focus:outline-none custom-scrollbar mt-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name="w3review"
              placeholder="Ask a question..."
              rows={3}
            ></textarea>

            <div className="flex items-start space-x-2 mr-4 mt-4">
              {loading ? (
                <LoadingAnimaiton />
              ) : (
                <>
                  <button className="text-gray-500 hover:text-blue-500 duration-200">
                    <FaMicrophoneAlt className="text-2xl" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={loading}
                    className="rounded-full duration-200 cursor-pointer"
                  >
                    <FiSend className="text-2xl text-gray-500" />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
