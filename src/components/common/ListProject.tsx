"use client";

import { projects } from "@/constants/projects";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ListProject() {
  return (
    <ul className="w-full grid gap-4 items-center lg:grid-cols-2 ">
      {projects.map(({ link, image, title, techStack }, index) => (
        <motion.li
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 * index }}
          key={index}
          className="w-full overflow-hidden rounded border border-light-accent dark:border-dark-accent"
        >
          <a
            href={link}
            target="_blank"
            className="w-full"
          >
            <motion.div
              initial={{ filter: "blur(20px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.3 * index }}
              className="w-full overflow-hidden"
            >
              <Image
                src={`${image}`}
                alt={title}
                width={500}
                height={300}
                className="object-cover w-full hover:scale-110"
              />
            </motion.div>
            <div className="p-2 bg-light-secondary dark:bg-dark-secondary">
              <div className="headings mb-2">
                {title}
              </div>
              <ul className="flex items-center gap-2">
                {techStack.map((tech, index) => (
                  <li key={index}>
                    <Icon icon={tech} />
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
