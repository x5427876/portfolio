import Image from "next/image";
import React from "react";
import Link from "next/link";
import Head from "next/head";

import { roboto } from "../_app";
import LinkIcon from "@/images/link.svg";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Gavin | Projects</title>
            </Head>
            <div className="w-[80%] text-black dark:text-white transition-all py-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-12">
                    Projects
                </h1>
                <div className={`${roboto.className}`}>
                    <div className="rounded-lg border-2 border-gray-500 p-5 flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <h1 className="text-3xl">Spotify Profile</h1>
                            <div className="py-6 md:mr-8 leading-relaxed">
                                A web application for visualizing personalized
                                Spotify data. View your top artists, top tracks,
                                recently played tracks, you can click to listen
                                to songs directly.
                            </div>
                            <Link
                                className="flex items-center justify-center cursor-pointer bg-gray-500 dark:bg-white p-2 rounded-lg w-1/3 mb-6 transition-all"
                                href="https://github.com/x5427876/spotify-profile"
                                target="_blank"
                            >
                                <p className="mr-2 text-white dark:text-black">Github</p>
                                <LinkIcon className="fill-white dark:fill-black w-[12px] h-[12px]" />
                            </Link>
                        </div>
                        <div className="md:w-1/2 flex items-center justify-center">
                            <Image
                                priority
                                className="rounded-lg"
                                src="/spotify-profile-preview.png"
                                alt="spotify-profile-preview"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
