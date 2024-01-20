"use client";

import { contacts } from "@/constants/contacts";
import { Icon } from "@iconify/react";
import ListContainer from "./ListContainer";

export default function ListContact() {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {contacts.map(({ label, icon, link }, index) => (
        <ListContainer
          index={index}
        >
          <a href={link} target="_blank" className="p-4 bg-light-secondary rounded dark:bg-dark-secondary flex items-center gap-2 hover:bg-light-accent dark:hover:bg-dark-accent hover:gap-4">
            <Icon icon={icon} fontSize={24} />
            <span>{label}</span>
          </a>
        </ListContainer>
      ))}
    </ul>
  );
}
