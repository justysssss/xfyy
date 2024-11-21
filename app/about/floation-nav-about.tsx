import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FloatingNavbar = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div
        className="overflow-hidden mt-4 rounded-[6px] top-5 sticky md:mx-auto 
        z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        {/* BACK BUTTON */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center justify-center p-2 bg-black text-white rounded-lg transition-transform duration-200 transform translate-x-2 hover:translate-x-0">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>

        {/* LOGO (Hidden on mobile) */}
        <Link href="/" className="group hidden md:flex items-center justify-center gap-3 transition-all duration-300 mx-auto">
          <div className="relative">
            <Image
              src="/logo/logo.png" // Ensure this path is correct
              alt="Xfyy"
              width={50}
              height={50}
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-lg"></div>
          </div>
          <span className="font-bold text-2xl mb-1 relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">Xfyy</span>
            <span className="block absolute top-full transition-transform duration-300 group-hover:-translate-y-full">Xfyy</span>
          </span>
        </Link>

        {/* ABOUT US PAGE */}
        <div className="flex items-center gap-x-4">
          <Link 
            href={"/meeting"}
            className="py-3 px-6
            text-lg hover:bg-[#abcbff]
            rounded-[6px]
            border-2
            border-black
            text-white
            bg-[#121212]
            transition duration-200
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
            dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4/4 rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;