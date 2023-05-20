import Footer from "@/components/Footer/Footer";
import Introduction from "@/components/Introduction/Introduction";
import WarningModal from "@/components/Modals/WarningModal";
import Navbar from "@/components/Navbar/Navbar";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [modal, setModal] = useState<boolean>(false)
  useEffect(() => {
    // Read the localStorage item
    const item = localStorage.getItem("modal");
    if (item) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, []);
  if (modal) {
    console.log("modal");
  }
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
        <div>
          <WarningModal modal={modal} setModal={setModal} />
        </div>
      </main>
    </>
  );
};

export default Home;
