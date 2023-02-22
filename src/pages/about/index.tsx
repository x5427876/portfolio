import React from "react";
import { roboto } from "../_app";
import Head from "next/head";

import TriangleIcon from "../../../images/triangle.svg";
import LinkIcon from "../../../images/link.svg";
import Link from "next/link";

const About = () => {
    return (
        <>
            <Head>
                <title>Gavin | About</title>
            </Head>
            <div className="w-[80%] text-white py-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-12">
                    About Me
                </h1>
                <div className={`text-xl md:text-2xl ${roboto.className}`}>
                    <p className="leading-loose">
                        I am a frontend developer and have 2 years of
                        experiences. Currently, I work at{" "}
                        <a
                            className="text-red-500"
                            href="https://www.91app.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            91APP
                        </a>{" "}
                        as a Frontend Developer crafting thoughtful and
                        inclusive experiences that adhere to web standards for
                        over a hundred merchants across Taiwan and Hong Kong.
                    </p>
                    <p className="mt-12 mb-8">
                        Here are a few technologies I’ve been working with
                        recently:
                    </p>
                    <div className="flex flex-wrap">
                        <div className="flex items-center w-1/2 h-12">
                            <TriangleIcon className="w-[12px] fill-white mr-4" />
                            <p className="ml-1">JavaScript</p>
                        </div>
                        <div className="flex items-center w-1/2 h-12">
                            <TriangleIcon className="w-[12px] fill-white mr-4" />
                            <p className="ml-1">TypeScript</p>
                        </div>
                        <div className="flex items-center w-1/2 h-12">
                            <TriangleIcon className="w-[12px] fill-white mr-4" />
                            <p className="ml-1">React</p>
                        </div>
                        <div className="flex items-center w-1/2 h-12">
                            <TriangleIcon className="w-[12px] fill-white mr-4" />
                            <p className="ml-1">Redux</p>
                        </div>
                        <div className="flex items-center w-1/2 h-12">
                            <TriangleIcon className="w-[12px] fill-white mr-4" />
                            <p className="ml-1">AngularJS</p>
                        </div>
                        <div className="flex items-center w-1/2 h-12">
                            <TriangleIcon className="w-[12px] fill-white mr-4" />
                            <p className="ml-1">TailwindCSS</p>
                        </div>
                    </div>
                </div>
                <Link
                    className={`text-xl md:text-2xl flex items-center mt-12  ${roboto.className} rounded-lg border-2 border-gray-500 py-4 px-12 inline-flex items-center cursor-pointer`}
                    href="https://docs.google.com/document/d/1dhruO-nQkk0z52lIKyVW_gEJCXxlAVLX/edit?usp=sharing&ouid=107890749883841392194&rtpof=true&sd=true"
                    target="_blank"
                >
                    <p className="mr-4">My Resume</p>
                    <LinkIcon className="fill-white w-[20px] h-[20px]" />
                </Link>
            </div>
        </>
    );
};

export default About;
