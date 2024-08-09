import React from "react";
import {  SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-200 p-6 w-full">
      <Link href="/" className="font-bold text-2xl">
        Rate My{" "}<span className="text-violet-400">UNI</span>
      </Link>
      <div className=" flex items-center gap-6">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Link href="/add" className={buttonVariants({ variant : "default"})}>Write Review</Link>
      </div>
    </nav>
  );
};

export default Navbar;
