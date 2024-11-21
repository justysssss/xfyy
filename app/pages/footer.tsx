import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export default function Footer() {
  return (
    <footer className="w-full rounded-2xl bg-[#dcebfd] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/logo/logo.png"
                alt="Onotes Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-semibold">Xfyy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Web Design and Development Agency.
            </p>
            <p className="text-sm text-muted-foreground">
              Copyright © 2024 - All rights reserved
            </p>
            <Link
              href="#"
              className="inline-flex items-center space-x-2 rounded-md bg-black px-3 py-2 text-sm text-white"
            >
              <span>Built with</span>
              <span className="text-yellow-400">❤️</span>
              <span>Justysss</span>
            </Link>
          </div>

          <div className="text-center"> 
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered Legal Section */}
          <div className="text-center"> 
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Terms of services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered More Section with ScrollLinks */}
          <div className="text-center"> 
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              More
            </h3>
            <ul className="space-y-2 cursor-pointer">
              {/* Use ScrollLink for smooth scrolling */}
              <li>
                <ScrollLink to="services" smooth={true} duration={500} className="text-sm hover:underline">Services</ScrollLink>
              </li>
              <li>
                <ScrollLink to="process" smooth={true} duration={500} className="text-sm hover:underline">Process</ScrollLink>
              </li>
              <li>
                <ScrollLink to="guarentees" smooth={true} duration={500} className="text-sm hover:underline">Guarantees</ScrollLink>
              </li>
              <li>
                <ScrollLink to="newsletter" smooth={true} duration={500} className="text-sm hover:underline">Newsletter for Makers</ScrollLink>
              </li>    
            </ul>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mt-8 flex flex-col items-center space-y-2 border-t pt-8"> 
          <div className="flex items-center space-x-2"> 
            <Image
              src="/pic1.png"
              alt="Sourish's profile picture"
              width={30}
              height={40}
              className="rounded-full"
            />
            <p className="text-sm text-muted-foreground">
              Hey Curious 👋 I&apos;m{" "}
              <span className="font-medium">Sourish</span>, the creator of Xfyy. You can follow me on{" "}
              <Link href="https://github.com/justysssss" 
              className="underline hover:text-foreground">
                Github
              </Link>
              <span className="mx-1">and</span>
              <Link href="https://www.linkedin.com/in/sourishbose10" 
              className="underline hover:text-foreground">
                Linkedin
              </Link>.
            </p>
          </div>
        </div>

      </div> {/* End of container */}
    </footer>
  );
}