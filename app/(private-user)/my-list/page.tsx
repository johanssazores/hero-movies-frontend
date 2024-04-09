import React from "react";
import MyList from "@/components/MyList";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hero Movies - My List",
  description: "Hero Movies  - My List",
};

const MyListPage = () => {
  return <MyList />;
};

export default MyListPage;
