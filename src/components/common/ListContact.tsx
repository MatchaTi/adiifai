"use client";

import { contacts } from "@/constants/contacts";
import { Icon } from "@iconify/react";

export default function ListContact() {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {contacts.map(({ label, icon, link }, index) => (
        <a href={link} target="_blank" key={index}>
          <li className="p-4 bg-light-secondary rounded dark:bg-dark-secondary flex items-center hover:bg-light-accent dark:hover:bg-dark-accent">
            <Icon icon={icon} fontSize={24} />
            <span className="ml-4">{label}</span>
          </li>
        </a>
      ))}
    </ul>
  );
}
