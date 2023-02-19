import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="flex h-full justify-center items-center">
            <Link
                className={`mx-8 font-bold cursor-pointer transition-all ${
                    router.pathname === "/" ? "text-gray-500" : "text-gray-300"
                }`}
                href="/"
            >
                Home
            </Link>
            <Link
                className={`mx-8 font-bold cursor-pointer transition-all ${
                    router.pathname === "/about" ? "text-gray-500" : "text-gray-300"
                }`}
                href="/about"
            >
                About
            </Link>
            <Link
                className={`mx-8 font-bold cursor-pointer transition-all ${
                    router.pathname === "/projects" ? "text-gray-500" : "text-gray-300"
                }`}
                href="/projects"
            >
                Projects
            </Link>
        </div>
    );
};

export default Navbar;
