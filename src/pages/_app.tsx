import type { AppProps } from "next/app";
import { Playfair_Display, Roboto } from "@next/font/google";
import { ThemeProvider } from "next-themes";

import "@/src/styles/globals.css";
import Navbar from "@/src/components/navbar";

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
        <ThemeProvider attribute="class">
            <div className={`${playfair.className}`}>
                <Navbar />
                <div className="flex justify-center items-center">
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    );
}
``;
