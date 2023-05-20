import Footer from "@/components/Footer/Footer";
import Introduction from "@/components/Introduction/Introduction";
import Navbar from "@/components/Navbar/Navbar";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Doc&apos;s portfolio</title>
        <meta name="description" content="Portfolio application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="">
          <Introduction />
        </div>
        <div>
          <div className='footer-spacer'></div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
