import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const PageHeader = () => {
  // TODO - Add user state
  const user = false;

  return (
    <div className="md:flex justify-end items-center w-full h-20 pr-5 hidden bg-white dark:bg-[#18161f]">
      {user ? (
        <Image
          src="/icons/icon.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      ) : (
        <Button className="bg-[#6f23fd] py-6 px-7 text-white hover:bg-[#6f23fd]">
          Sing in
        </Button>
      )}
    </div>
  );
};

export default PageHeader;
