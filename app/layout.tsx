import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I fucking hate",
  description: "I fucking hate everything.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex h-full flex-col bg-neutral-800`}
      >
        <div className="flex-1">{children}</div>
        <footer className="p-4 text-center text-sm text-neutral-500">
          inspired by{" "}
          <a
            className="text-sky-600/80"
            href="https://ifuckinghatejira.com/"
            target="_blank"
          >
            ifuckinghatejira.com
          </a>
        </footer>
      </body>
    </html>
  );
}
