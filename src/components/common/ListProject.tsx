"use client";

import { projects } from "@/constants/projects";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import ListContainer from "./ListContainer";

export default function ListProject() {
  return (
    <ul className="w-full grid gap-4 items-center lg:grid-cols-2 ">
      {projects.map(({ link, image, title, techStack }, index) => (
        <ListContainer
          index={index}
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
              className="w-full h-40 overflow-hidden"
            >
              <Image
                src={`${image}`}
                alt={title}
                width={500}
                height={300}
                className="object-cover object-center w-full h-full hover:scale-110"
                loading="lazy"
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
        </ListContainer>
      ))}
    </ul>
  );
}
