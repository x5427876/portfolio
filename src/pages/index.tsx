import Image from "next/image";

import InstagramIcon from "../../images/instagram.svg";
import GithubIcon from "../../images/github.svg";
import LinkedIcon from "../../images/linkedin.svg";

export default function Home() {
    return (
        <div className="w-[70%] h-[calc(100vh-80px)] py-[15%] flex flex-col-reverse md:flex-row md:justify-between text-white">
            <div className="w-full md:w-[60%] h-[50%] md:h-full flex flex-col justify-center">
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
                    <InstagramIcon className="w-[32px] h-[32px] mr-4 fill-white" />
                    <GithubIcon className="w-[32px] h-[32px] mr-4 fill-white" />
                    <LinkedIcon className="w-[32px] h-[32px] mr-4 fill-white" />
                </div>
            </div>
            <div className="w-full md:w-[30%] h-[50%] md:h-full flex items-center justify-center">
                <Image
                    priority
                    className="rounded-full w-auto md:w-full md:h-auto aspect-square"
                    src="/images/avatar.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
