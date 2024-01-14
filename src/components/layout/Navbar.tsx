"use client";

import { navLists } from "@/constants/navLists";
import { useState } from "react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="divide-y divide-light-accent dark:divide-dark-accent">
      <div className="pb-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="w-5 aspect-square rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center"
              src={"/pdh.png"}
              width={1080}
              height={1080}
              alt="Profile Image"
            />
          </div>
          <span className="headings flex-1 lg:flex-none">
            Adi Muhammad Syifai
          </span>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Icon icon="ph:x" />
          </button>
        </div>
        <div>Badge</div>
        <ThemeSwitcher />
      </div>
      <ul className={`${isOpen ? "block" : "hidden"} headings pt-3 pb-2 lg:block`}>
        {navLists.map(({ name, path, icon }, index) => (
          <Link href={path} key={index} className="w-full">
            <li
              className={`${
                pathName == path && "bg-light-secondary dark:bg-dark-secondary"
              } capitalize font-medium mb-[2px] flex items-center gap-2 p-2 rounded hover:bg-light-secondary dark:hover:bg-dark-secondary`}
            >
              <Icon icon={icon} />
              <span>{name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="hidden pt-4 lg:flex lg:items-center lg:gap-1">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>with</span>
        <span className="text-red-500 animate-pulse">❤</span>
        <span>by</span>
        <span className="hover:dark:text-neutral-400 cursor-pointer">Adi Ifai</span>
      </div>
    </nav>
  );
}
