"use client";

import { techStack } from "@/constants/techStack";
import { Icon } from "@iconify/react";
import ListContainer from "./ListContainer";

export default function TechStack() {
  return (
    <ul className="lg:flex lg:items-start lg:justify-between">
      {techStack.map(({ label, icon, list }, index) => (
        <ListContainer
          index={index}
          key={index}
          className="pl-4 p-2 border-l border-light-accent dark:border-dark-accent lg:bg-light-secondary lg:rounded-lg lg:border-none dark:lg:bg-dark-secondary"
        >
          <div className="headings flex items-center gap-1">
            <Icon icon={icon} />
            <span>{label}</span>
          </div>
          {list.map(({ name, icon }, index) => (
            <div
              key={index}
              className="pl-4 p-2 border-l border-light-accent dark:border-dark-accent"
            >
              <div className="flex items-center gap-1">
                <Icon icon={icon} />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </ListContainer>
      ))}
    </ul>
  );
}
