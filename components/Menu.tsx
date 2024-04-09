import React from "react";
import Button from "@/components/Button";
import { signOut, useSession } from "next-auth/react";
const Menu = () => {
  const { data: session }: any = useSession();
  return (
    <div className="flex items-center justify-between border-b border shadow-lg py-6 px-8">
      <h1 className="font-bold text-2xl">Hero Movies</h1>

      <ul className="flex items-center justify-end">
        {session ? (
          <>
            <li className="px-2">
              <Button onClick={() => signOut()}>Logout</Button>
            </li>
          </>
        ) : (
          <li className="px-2">
            <Button anchor={true} href="/">
              Login
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
