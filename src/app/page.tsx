"use client";
import { Button } from "jaida-ds/dist/components/Button";

export default function Home() {
  return (
    <div className="bg-red-500">
      <Button label="I am a Button" onClick={() => console.log("hi")} />
    </div>
  );
}
