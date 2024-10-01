import Link from "next/link";
import React from "react";

const Footer = () => {
  const student = {
    id: 5373,
    name: "Blagoja Blazhevski",
  };
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground text-center">
        {new Date().getFullYear()} {student.name} - {student.id}
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          About
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
