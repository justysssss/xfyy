import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";


const font = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "700"]
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xfyy | Web Design and Development Agency",
  description: "Give life to your website with Xfyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
