"use client";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Loader from "@/components/Loader";
import Button from "@/components/Button";
const Login = () => {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  }) as any;
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!loginState.username) {
      setIsError("Username is Required");
      return;
    }

    if (!loginState.password) {
      setIsError("Password can't be empty");
      return;
    }

    try {
      setIsLoading(true);
      const loginUser = await signIn("credentials", {
        redirect: false,
        username: loginState.username,
        password: loginState.password,
      });

      if (loginUser?.ok) {
        window.location.href = "/movies";
        return;
      } else {
        setIsError("Something is wrong with your Login Details");
      }
    } catch (error) {
      console.error(error);
      setIsError(JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    mounted && (
      <>
        <div className="flex min-h-full justify-center px-6 py-12 lg:px-8 ">
          <div className="border rounded-lg shadow-lg px-8 py-10 w-96">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Hero Movies
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username/Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) =>
                        setLoginState({
                          ...loginState,
                          username: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) =>
                        setLoginState({
                          ...loginState,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                {isError && (
                  <div className="flex justify-center border border-red-400 rounded-lg text-red-400 p-2">
                    <p>{isError}</p>
                  </div>
                )}

                <div>
                  <Button type="submit">Login</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {isLoading && <Loader />}
      </>
    )
  );
};

export default Login;
