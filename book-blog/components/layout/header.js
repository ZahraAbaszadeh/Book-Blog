import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 bg-gray-700 text-white sticky top-0 z-50">
      <div className="flex justify-between ">
        <div className="px-10 font-semibold text-lg">
          <Link href="/">LOGO</Link>
        </div>
        <div className="px-10 font-semibold text-lg">
          <Link href="/books">Browse All Books</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
