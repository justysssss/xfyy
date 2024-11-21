import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Poppins, Montserrat } from "next/font/google";
import FloatingNavbar from "./floation-nav-about";


const font = Space_Grotesk({ subsets: ["latin"] });


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
   <main>
    <FloatingNavbar />
    {children}
   </main>
  );
}