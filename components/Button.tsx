import React from "react";

const Button = ({ children, anchor = false, href = "/", ...props }: any) => {
  return (
    <>
      {anchor ? (
        <a href={href}></a>
      ) : (
        <button
          {...props}
          className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${props.className}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
