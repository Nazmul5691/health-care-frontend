"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

interface NavLinksProps {
  navItems: NavItem[];
}

const NavLinks = ({ navItems }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:items-center md:space-x-6">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-blue-600"
                : "text-white hover:text-blue-600"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
