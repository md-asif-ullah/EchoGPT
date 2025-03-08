import Image from "next/image";
import React from "react";

const FeaturesSection = ({ modelContent }: { modelContent: Items }) => {
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
    <>
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="dark:bg-[#18161f] bg-white hover:bg-[#f7f5ff] hover:dark:bg-[#1e1a2a] border border-b-neutral-50 dark:border-[#22202a] p-4 rounded-md"
          >
            <h3 className="text-sm font-semibold">{feature.title}</h3>
            <p className="text-gray-600 dark:text-[#dcdcdd] mt-3 text-xs font-semibold">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default FeaturesSection;
