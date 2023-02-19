import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Playfair_Display, Roboto } from "@next/font/google";

import Navbar from "components/navbar";

const playfair = Playfair_Display({
    weight: "400",
    subsets: ["latin"],
});

export const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${playfair.className}`}>
            <div className=" h-[80px]">
                <Navbar />
            </div>
            <div className="flex justify-center items-center">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
``;
