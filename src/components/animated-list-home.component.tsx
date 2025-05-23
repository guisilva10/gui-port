"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";

interface Item {
  name: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "HTML",
    time: "15m ago",
    icon: "🌐", // Representando HTML
    color: "#E34C26",
  },
  {
    name: "CSS",
    time: "10m ago",
    icon: "🎨", // Representando CSS
    color: "#264DE4",
  },
  {
    name: "JavaScript",
    time: "5m ago",
    icon: "📜", // Representando JavaScript
    color: "#F7DF1E",
  },
  {
    name: "React",
    time: "2m ago",
    icon: "⚛️", // Representando React
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    time: "2m ago",
    icon: "🚀", // Representando Next.js
    color: "#000000",
  },
  {
    name: "WordPress",
    time: "2m ago",
    icon: "📝", // Representando WordPress
    color: "#21759B",
  },
  {
    name: "Node.js",
    time: "2m ago",
    icon: "🟢", // Representando Node.js
    color: "#339933",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListHome({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
