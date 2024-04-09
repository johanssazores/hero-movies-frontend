"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
import Login from "@/components/Login";
import UserDetails from "@/components/UserDetails";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session }: any = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!session) {
    return <Login />;
  }

  return mounted ? (
    <div>
      <Menu />

      <main>
        <UserDetails />
        {children}
      </main>
    </div>
  ) : (
    <Loader />
  );
}
