import Image from "next/image";

import InstagramIcon from "../../images/instagram.svg";
import GithubIcon from "../../images/github.svg";
import LinkedIcon from "../../images/linkedin.svg";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-[70%] h-[calc(100vh-80px)] py-12` flex flex-col-reverse md:flex-row justify-between text-white">
            <div className="w-full h-[45%] md:w-[60%] md:h-full flex flex-col justify-center">
                <div className="text-3xl md:text-5xl font-bold">
                    <span className="bg-gray-500">
                        Hi, My Name Is Gavin Kong.
                    </span>
                </div>
                <p className="mt-8 text-xl md:text-2xl">
                    Frontend developer, Rock music lover, and Gamer based in
                    Taipei, Taiwan.
                </p>
                <div className="mt-12 flex">
                    <Link
                        href="https://www.instagram.com/kongtse.0613/"
                        target="_blank"
                    >
                        <InstagramIcon className="w-[32px] h-[32px] mr-4 fill-white" />
                    </Link>
                    <Link href="https://github.com/x5427876" target="_blank">
                        <GithubIcon className="w-[32px] h-[32px] mr-4 fill-white" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/gavinkong/"
                        target="_blank"
                    >
                        <LinkedIcon className="w-[32px] h-[32px] mr-4 fill-white" />
                    </Link>
                </div>
            </div>
            <div className="w-full h-[45%] md:w-[30%] md:h-full flex items-center justify-center">
                <Image
                    priority
                    className="rounded-full w-auto md:w-full md:h-auto aspect-square"
                    src="/avatar.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
