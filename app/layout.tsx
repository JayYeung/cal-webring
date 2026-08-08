import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Cal Webring",
  description: "A webring connecting UC Berkeley students' personal sites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${notoSansMono.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
