"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  name: "홈" | "소개" | "방명록";
  href: "/" | "/about" | "/guestbook";
};

const Header = () => {
  const pathname = usePathname();

  const NavList: NavProps[] = [
    { name: "홈", href: "/" },
    { name: "소개", href: "/about" },
    { name: "방명록", href: "/guestbook" },
  ];

  return (
    <header className="w-full h-[70px] sticky top-0 right-0 bottom-0 left-0 z-[1] backdrop-blur-[15px] shadow-headerShadow dark:shadow-darkShadow flex items-center px-5">
      <div className="w-[672px] mx-auto flex justify-between items-center">
        <Link href="/">홈</Link>
        <ul className="flex gap-5">
          {NavList.map(({ name, href }) => (
            <li key={name} className="relative">
              <Link href={href}>{name}</Link>
              {pathname === href && (
                <div className="absolute h-[1px] w-full bg-black dark:bg-darkLine animate-underline"></div>
              )}
            </li>
          ))}
          <ThemeToggle />
        </ul>
      </div>
    </header>
  );
};

export default Header;
