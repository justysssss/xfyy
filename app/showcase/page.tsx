"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "../pages/footer";
import { motion } from "framer-motion"; // Import motion from framer-motion

// This would be your actual data
const projects = [
  {
    title: "ShopEasy",
    description: "An Ecommerce Website curated to bring you the best of the offers available on market.",
    image: "/webpages/shopeasy.png",
    link: "https://justysssss.github.io/ShopEasy/index.html",
    comingSoon: false,
  },
  {
    title: "O_Notes",
    description: "Bring your ideas to life with the help of Onotes.",
    image: "/webpages/o_notes.png",
    link: "https://example.com/neutral",
    comingSoon: true,
  },
  {
    title: "Tic-Tac-Toe",
    description: "A simple Tic-Tac-Toe game made with React",
    image: "/webpages/tictactoe.png",
    link: "https://tictactoex.vercel.app/",
    comingSoon: false,
  },
  {
    title: "Notivos",
    description: "Your daily note taking app.",
    image: "/webpages/notivos.png",
    link: "https://example.com/four",
    comingSoon: true,
  },
];

function ComingSoonDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex font-bold items-center text-emerald-500">
      Coming soon
      <span className="w-[24px] text-left">{dots}</span>
    </span>
  );
}

function ProjectCard({
  title,
  description,
  image,
  link,
  comingSoon,
  className,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  comingSoon: boolean;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border bg-card text-card-foreground transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative space-y-2 p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="pt-4">
          {comingSoon ? (
            <ComingSoonDots />
          ) : (
            <Button asChild className="group/button">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visit now
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Showcase() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="container mx-auto px-4 py-24">
        {/* Animate the heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-display text-left text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]">
            Featured Projects
          </h1>
        </motion.div>

        {/* Animate the project cards */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }} // Delay for cards to appear after heading
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered entrance for each card
            >
              <ProjectCard
                {...project}
                className={cn(
                  // Add custom sizes for specific cards to create the bento grid effect
                  index === 0 && "md:col-span-1 md:row-span-1",
                  index === 1 && "md:col-span-1 md:row-span-1",
                  index === 2 && "md:col-span-1 md:row-span-1",
                  index === 3 && "md:col-span-1 md:row-span-1"
                )}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}