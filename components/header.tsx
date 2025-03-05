"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between md:hidden p-3">
      <div className="flex items-center space-x-2 md:hidden ml-12">
        <Image src="/icons/icon.png" alt="Logo" width={40} height={40} />
        <h1 className="font-bold text-2xl">Echo GPT</h1>
      </div>

      <div>
        <Button className="bg-[#6f23fd] text-white sm:p-6">Sing In</Button>
      </div>
    </div>
  );
};

export default Header;
