import Head from "next/head";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Taqschema</title>
      </Head>
      <main>
      <Navbar />
        <Homepage />
       

  
      </main>
    </div>
  );
}
