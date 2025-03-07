"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";
import PlanSection from "@/components/plan-section";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Ask a question" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [modelContent, setModelContent] = useState<Items>({
    img: "/icons/icon.png",
    title: "EchoGPT",
    description:
      "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
  });

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const newMessage = { role: "user", content: input };

    try {
      const response = await axios.post("/api/chat", {
        messages: [...messages, newMessage],
        model: "EchoGPT",
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

  const features = [
    {
      title: "Unlock Your Creative Flow",
      description:
        "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.",
    },
    {
      title: "Build a Resume That Shines",
      description:
        "Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential employers.",
    },
    {
      title: "Set a Challenge That Transforms You",
      description:
        "Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow.",
    },
    {
      title: "Write Irresistible Social Content",
      description:
        "Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations.",
    },
  ];

  return (
    <div className="bg-[#18161f] w-full min-h-[89vh] flex justify-center items-center overflow-hidden">
      <div className="max-w-[820px] p-4">
        <div className="flex flex-col items-center space-y-10 overflow-auto h-[350px] custom-scrollbar">
          {/* Logo Section */}
          <section className="flex flex-col items-center text-center space-y-4 mt-10 md:mt-0">
            <Image
              src={modelContent.img}
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h2 className="text-2xl font-semibold">{modelContent.title}</h2>
            <p className="text-gray-600 dark:text-gray-100 font-semibold max-w-xl">
              {modelContent.description}
            </p>
          </section>

          {/* Features Section */}

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#18161f] hover:bg-[#1e1a2a] border border-[#22202a] p-4 rounded-md"
              >
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="text-gray-600 dark:text-[#dcdcdd] mt-3 text-xs font-semibold">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>
        </div>

        <section className="p-5 border border-[#2b303e] rounded-2xl">
          <PlanSection setModelContent={setModelContent} />
          <div className="flex items-center flex-grow border border-[#2b303e] rounded-xl">
            <div className="flex items-center space-x-2 flex-grow">
              <HiOutlineSwitchVertical className="text-gray-500 text-2xl" />

              <textarea
                className="rounded-lg w-full lg:mx-5 text-gray-100 resize-none focus:outline-none custom-scrollbar"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                name="w3review"
                placeholder="Ask a question..."
                rows={2}
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-blue-500 transition-all duration-200">
                <FaMicrophoneAlt className="text-2xl" />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={loading}
                className="rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <FiSend className="text-xl" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
