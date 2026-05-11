"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import {
  ArrowUpRight,
  Briefcase,
  LinkIcon,
  Mail,
  MessageCircle,
} from "lucide-react";

import styles from "./contact-menu.module.css";

const contacts = [
  {
    icon: <MessageCircle size={18} />,

    label: "WhatsApp",

    href: "https://wa.me/5511984171590",
  },

  {
    icon: <Mail size={18} />,

    label: "Email",

    href: "mailto:leonardolandell2000@gmail.com",
  },

  {
    icon: <Briefcase size={18} />,

    label: "GitHub",

    href: "https://github.com/LeonardoLandell",
  },

  {
    icon: <LinkIcon size={18} />,

    label: "LinkedIn",

    href: "https://www.linkedin.com/in/leonardo-landell/",
  },
];

export function ContactMenu() {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        Contact
      </button>

      {open && (
        <div className={styles.menu}>
          {contacts.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              className={styles.item}
              onClick={() => setOpen(false)}
            >
              <div className={styles.left}>
                <span className={styles.icon}>{item.icon}</span>

                <span className={styles.label}>{item.label}</span>
              </div>

              <ArrowUpRight size={16} className={styles.arrow} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
