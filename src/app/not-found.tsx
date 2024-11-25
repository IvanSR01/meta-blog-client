import Layout from "@/components/layout/Layout";
import NotFound from "@/screens/not-found/NotFound";
import type { NextPage } from "next";

const page: NextPage = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};
export default page;
