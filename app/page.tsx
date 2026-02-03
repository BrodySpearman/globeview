'use client';
import Image from "next/image";
import dynamic from "next/dynamic";
import Logo from "./Components/Logo/Logo";

const WorldMapNoSSR = dynamic(() => import("./Components/WorldMap/WorldMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Logo />
      <WorldMapNoSSR />
    </main>
  );
}