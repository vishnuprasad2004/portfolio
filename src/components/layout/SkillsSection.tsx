"use client";

import { Space_Mono } from "next/font/google";
import { useEffect, useRef, useState, CSSProperties } from "react";
import { IconType } from "react-icons";
import Heading from "../Heading";
import skills from "@/lib/skill";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

type KeyProps = { name: string; Icon: IconType; color: string; shown: boolean; i: number };

// A keycap: raised plate, shadow turns rose on hover, presses flat on click.
const Key = ({ name, Icon, color, shown, i }: KeyProps) => (
  <li
    style={{ "--d": `${Math.min(i, 24) * 45}ms` } as CSSProperties}
    className={`flex min-h-[44px] select-none items-center gap-2.5 rounded-sm border-2 border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm text-neutral-200
      shadow-[4px_4px_0_0_#262626] transition-[transform,box-shadow,border-color] duration-150 ease-out motion-reduce:transition-none
      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-rose-500 hover:shadow-[6px_6px_0_0_#f43f5e]
      active:translate-x-1 active:translate-y-1 active:shadow-none
      ${shown ? "animate-[key-in_450ms_var(--d)_backwards] motion-reduce:animate-none" : "opacity-0"}`}
  >
    <Icon color={color} size={20} aria-hidden />
    <span className="whitespace-nowrap">{name}</span>
  </li>
);

const SkillsSection = () => {
  const trayRef = useRef<HTMLUListElement>(null);
  const [shown, setShown] = useState(false);

  // Keys drop in once, the first time the tray scrolls into view.
  useEffect(() => {
    const el = trayRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`${spaceMono.className} mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-10 px-4 py-16 sm:px-6`}
    >
      <style>{`@keyframes key-in{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}`}</style>
      <Heading text="My Skills" />
      <div className="w-full rounded-sm border-2 border-neutral-800 bg-neutral-950/80 p-4 shadow-[8px_8px_0_0_#1c1c1c] sm:p-6">
        <ul ref={trayRef} id="skills-container" className="flex flex-wrap gap-x-3 gap-y-4">
          {skills.map((s, i) => (
            <Key key={s.name} name={s.name} Icon={s.icon} color={s.color} shown={shown} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;