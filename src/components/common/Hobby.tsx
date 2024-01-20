"use client";

import { hobbies } from "@/constants/hobbies";
import { Icon } from "@iconify/react";
import ListContainer from "./ListContainer";

export default function Hobby() {
  return (
    <ul className="flex flex-col gap-2 lg:items-center lg:justify-between lg:flex-row">
      {hobbies.map(({ name, icon }, index) => (
        <ListContainer
          index={index}
          key={index}
          className="py-2 flex-1 flex items-center justify-center gap-2 rounded border border-light-accent dark:border-dark-accent"
        >
          <Icon icon={icon} />
          {name}
        </ListContainer>
      ))}
    </ul>
  );
}
