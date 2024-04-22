import Image from "next/image";
import { Card } from "./components/card";

export default function Home() {
  return (
    <main className="">
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <Card />
      </div>
    </main>
  );
}
