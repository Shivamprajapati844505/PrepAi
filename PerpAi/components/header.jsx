import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav>
        <Link>
        </Link>

      </nav>
      <SignedOut>
        <SignInButton />
        {/* <SignUpButton /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
