"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
import { useRouter } from "next/navigation";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session }: any = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!session) {
    return;
  }

  return mounted ? (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  ) : (
    <Loader />
  );
}
