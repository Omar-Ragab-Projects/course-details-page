"use client";
import breadCrumbs from "@/lib/breadcrumbs";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function BreadCrumbs() {
  const pathName = usePathname();

  const isActivePath = (path: string) => {
    return pathName == path;
  };

  return (
    <ul className="flex items-center gap-2 py-4 text-sm">
      {breadCrumbs.map((item, index) => (
        <li key={index} className="group">
          <Link
            href={item.path}
            className={`flex-center gap-2 hover:text-foreground transition ${
              isActivePath(item.path) ? "" : "text-gray-400"
            }`}
          >
            <span>{item.title}</span>
            <ChevronRight
              className="group-last:hidden text-gray-700"
              size={15}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BreadCrumbs;
