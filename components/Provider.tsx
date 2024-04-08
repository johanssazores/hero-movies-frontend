// components/ProviderRoot.tsx

"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useEffect } from "react";
import { authenticateWithToken, logout } from "@/redux/actions/authActions";
import { verifyToken } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function ProviderRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem("heroMoviesToken");
      if (token) {
        try {
          const isValid = await verifyToken(token);
          if (isValid) {
            store.dispatch(authenticateWithToken(token));
            router.push("/movies");
          } else {
            store.dispatch(logout());
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          store.dispatch(logout());
        }
      }
    };

    authenticateUser();
  }, [router]);

  return <Provider store={store}>{children}</Provider>;
}
