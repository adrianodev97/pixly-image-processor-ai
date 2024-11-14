"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-icon.svg"}
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="text-2xl font-bold text-purple-500">Logo</h1>
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                width={32}
                height={32}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Link href={"/"} className="flex items-center gap-2 md:py-2">
                  <Image
                    src={"/assets/images/logo-icon.svg"}
                    width={50}
                    height={50}
                    alt="logo"
                  />
                  <h1 className="text-2xl font-bold text-purple-500">Logo</h1>
                </Link>
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={link.route}
                        className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap tex-dark-700`}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            width={24}
                            height={24}
                            alt="Link icon"
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
