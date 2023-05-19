import Navbar from "@/components/Navbar/Navbar";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Doc's portfolio</title>
        <meta name="description" content="Portfolio application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <div>
          <Navbar />
        </div>
      </main>
    </>
  );
};

export default Home;
