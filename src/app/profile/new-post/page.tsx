'use client';
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const NewPost = dynamic(
  () => import("@/screens/profile/profile-pages/new-post/NewPost"),
  { ssr: false }
);

const page: NextPage = () => {
  return <NewPost />;
};
export default page;
