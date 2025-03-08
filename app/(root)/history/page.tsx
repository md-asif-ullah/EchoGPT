import SearchInHistory from "@/components/search-in-history";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat history | EchoGPT",
};

const History = () => {
  return (
    <div className="bg-white dark:bg-[#18161f] min-h-screen h-full w-full pt-5">
      <section className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          My Chat History
        </h2>
        <p className="text-gray-600 dark:text-white text-lg max-w-[850px] mt-2 px-4 font-semibold">
          Access your complete chat history across diverse topics and
          interactions with different models or characters.
        </p>
      </section>

      <SearchInHistory />
    </div>
  );
};

export default History;
