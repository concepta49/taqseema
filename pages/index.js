import Head from "next/head";
import Homepage from "./components/Homepage";
import Test from "./components/Test";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Taqschema</title>
      </Head>
      <main>
      <Test />
        <Homepage />
      

  
      </main>
    </div>
  );
}
