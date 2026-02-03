'use client';
import Image from "next/image";
import dynamic from "next/dynamic";
import LogoBar from "./Components/LogoBar/LogoBar";

const WorldMapNoSSR = dynamic(() => import("./Components/WorldMap/WorldMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LogoBar />
      <WorldMapNoSSR />
    </main>
  );
}