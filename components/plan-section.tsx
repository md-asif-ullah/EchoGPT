import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

type AiModel = {
  name: string;
  model: {
    img: string;
    title: string;
    description: string;
  }[];
};

interface propsType {
  setModelContent: (item: Items) => void;
}

function PlanSection({ setModelContent }: propsType) {
  const aiModel: AiModel[] = [
    {
      name: "Default Models",
      model: [
        {
          img: "/icons/icon.png",
          title: "EchoGPT",
          description:
            "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
        },
        {
          img: "/icons/icon.png",
          title: "Gemma2-9B",
          description:
            "Gemma2-9B specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/icon.png",
          title: "llama-3.3-70B",
          description:
            "llama-3.3-70B specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/icon.png",
          title: "llama3-8B",
          description:
            "llama3-8B specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
        },
      ],
    },
    {
      name: "Advanced Models",
      model: [
        {
          img: "/icons/chatgpt.svg",
          title: "DALL-E",
          description:
            "Transform prompts into stunning visuals using DALL-E’s AI, crafting imaginative artwork and captivating designs with ease.",
        },
        {
          img: "/icons/gemini.svg",
          title: "Gemini Advance",
          description:
            "Gemini Advance is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/chatgpt.svg",
          title: "GPT-4.o",
          description:
            "GPT-4.o is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/chatgpt.svg",
          title: "GPT-4.o mini",
          description:
            "GPT-4.o mini is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/chatgpt.svg",
          title: "GPT-o1-preview",
          description:
            "GPT-o1-preview is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/mistral.svg",
          title: "Mistral pro",
          description:
            "Mistral pro is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/claude.svg",
          title: " Claude 3.5 sonnet",
          description:
            "Claude 3.5 sonnet is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/claude.svg",
          title: "Claude Opus",
          description:
            "Claude Opus is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
        {
          img: "/icons/deepseek.ico",
          title: "Deepseek R1",
          description:
            "Deepseek R1 is a powerful AI model that specializes in advanced data exploration, delivering accurate, insightful, and efficient solutions for complex analysis.",
        },
      ],
    },
  ];

  return (
    <div className="pb-4">
      <div className="flex space-x-6">
        <div className="relative group">
          <button className="text-white flex items-center space-x-1">
            <Image
              src="/icons/icon.png"
              alt="Logo"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Services</span>
            <MdKeyboardArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
          </button>

          <div className="absolute left-0 bottom-full mb-2 w-[400px] h-[400px] overflow-auto custom-scrollbar bg-white dark:bg-[#18161f] text-gray-800 shadow-lg invisible group-hover:visible transition-all duration-200 border border-[#34303d] rounded-2xl">
            <div className="px-2 py-1 text-black dark:text-white cursor-pointer">
              <section className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/icons/model.svg"
                    alt="model logo"
                    width={20}
                    height={20}
                    className="rounded-full h-[20px] w-[20px]"
                  />
                  <h2 className="font-bold dark:text-white">Model</h2>
                </div>
                <button className="flex items-center space-x-1 dark:bg-white py-1 px-3 rounded-3xl">
                  <Image
                    src="/icons/red-rocket.svg"
                    alt="upgrade logo"
                    width={20}
                    height={20}
                    className="rounded-full h-[20px] w-[20px]"
                  />
                  <h2 className="text-xs text-[#8748fd] font-bold">Upgrade</h2>
                </button>
              </section>

              {aiModel.map((model, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800 dark:text-[#868688] border-b border-[#22202a] mx-4 pb-2 text-xs font-bold mb-2">
                    {model.name}
                  </h3>

                  <ul className="space-y-1">
                    {model.model.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-1 bg-gray-100 rounded-lg dark:bg-transparent hover:bg-gray-200  transition"
                      >
                        <button
                          onClick={() => setModelContent(item)}
                          className="flex flex-col w-full text-left p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                        >
                          <div className="flex items-center space-x-2">
                            <Image
                              src={item.img}
                              alt={item.title}
                              width={20}
                              height={20}
                              className="rounded-full h-[20px] w-[20px]"
                            />
                            <span className="text-gray-900 dark:text-white font-medium text-sm">
                              {item.title}
                            </span>
                          </div>

                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanSection;
