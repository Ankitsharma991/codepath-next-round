import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white w-full">
      <Link href="/">
        <div className="container mx-auto font-bold uppercase s">
          Codepath Next Challenge
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
