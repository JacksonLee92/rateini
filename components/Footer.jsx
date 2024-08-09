import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-evenly bg-slate-200 flex-col h-36">
            <Link href="/" className="font-bold text-2xl">
        Rate My{" "}<span className="text-violet-400">UNI</span>
      </Link>
      <p>Copyright &copy; 2024 </p>
    </footer>
  );
};

export default Footer;
