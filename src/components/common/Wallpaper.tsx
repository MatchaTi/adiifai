"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Wallpaper() {
  const [wallpaper, setWallpaper] = useState("matcha");

  return (
    <>
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="hidden px-4 py-2 bg-light-bg dark:bg-dark-bg lg:flex lg:items-center lg:justify-between"
      >
        <span className="headings">
          AdiIfai Portfolio
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setWallpaper("matcha")}
            className={`${
              wallpaper == "matcha" &&
              "border-matcha text-matcha dark:border-matcha"
            } text-[10px] py-[1px] px-4 rounded-full flex items-center gap-2 bg-light-bg border border-light-secondary dark:bg-dark-bg dark:border-dark-secondary`}
          >
            Matcha
          </button>
          <button
            type="button"
            onClick={() => setWallpaper("cloud")}
            className={`${
              wallpaper == "cloud" &&
              "border-sky-400 text-sky-400 dark:border-sky-400"
            }
} text-[10px] py-[1px] px-4 rounded-full flex items-center gap-2 bg-light-bg border border-light-secondary dark:bg-dark-bg dark:border-dark-secondary`}
          >
            Cloud
          </button>
          <button
            type="button"
            onClick={() => setWallpaper("mountain")}
            className={`${
              wallpaper == "mountain" &&
              "border-pink-400 text-pink-400 dark:border-pink-400"
            } text-[10px] py-[1px] px-4 rounded-full flex items-center gap-2 bg-light-bg border border-light-secondary dark:bg-dark-bg dark:border-dark-secondary`}
          >
            Mountain
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden relative -z-10 overflow-hidden h-32 2xl:h-72 lg:block"
      >
        <Image
          className="hidden w-full h-full object-cover object-center lg:block"
          width={1920}
          height={1080}
          src={`/${wallpaper}.png`}
          alt="Wallpaper"
          loading="lazy"
        />
      </motion.div>
    </>
  );
}
