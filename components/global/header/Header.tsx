import React from "react";
import BreadCrumbs from "./BreadCrumbs";

async function Header() {
  return (
    <header className="bg-[#f5f9fa]">
      <div className="container">
        <BreadCrumbs />

        <h1 className="text-3xl font-bold pt-2 pb-4">
          Starting SEO as your Home
        </h1>
      </div>
    </header>
  );
}

export default Header;
