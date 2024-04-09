import React from "react";
import { useSession } from "next-auth/react";
const UserDetails = () => {
  const { data: session }: any = useSession();
  return (
    <div className="px-6 mt-6">
      <div className="shadow-lg rounded-lg border p-4">
        <h4 className="font-semibold">User Details:</h4>
        <p>
          User ID: <span>{session?.user?.user_id}</span>
        </p>
        <p>
          Email: <span>{session?.user?.email}</span>
        </p>
        <p>
          Username: <span>{session?.user?.username}</span>
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
