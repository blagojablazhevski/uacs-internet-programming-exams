"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Recipes() {
  const router = useRouter();

  // const query = useSearchParams().get("");
  const query = usePathname().split("/")[2];
  console.log(query);
  return (
    <div>
      <main>tEST</main>
    </div>
  );
}
