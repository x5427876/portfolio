import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import HalfCircle from "@/images/half-circle.svg";
import { useTheme } from 'next-themes'

const Navbar = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex h-[80px] justify-between items-center px-4">
            <div className="w-[60%]">
                <Link
                    className={`mx-4 font-bold cursor-pointer transition-all ${
                        router.pathname === "/"
                            ? "text-black dark:text-gray-500"
                            : "text-gray-500 dark:text-gray-300"
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`mx-4 font-bold cursor-pointer transition-all ${
                        router.pathname === "/about"
                            ? "text-black dark:text-gray-500"
                            : "text-gray-500 dark:text-gray-300"
                    }`}
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className={`mx-4 font-bold cursor-pointer transition-all ${
                        router.pathname === "/projects"
                            ? "text-black dark:text-gray-500"
                            : "text-gray-500 dark:text-gray-300"
                    }`}
                    href="/projects"
                >
                    Projects
                </Link>
            </div>
            <div className="flex w-[10%] justify-center">
                <HalfCircle
                    className="w-5 dark:fill-white cursor-pointer"
                    onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                />
            </div>
        </div>
    );
};

export default Navbar;
