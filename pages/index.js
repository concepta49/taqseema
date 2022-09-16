import Head from "next/head";

import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Taqschema</title>
      </Head>
      <main>
        <Homepage />
  
      </main>
    </div>
  );
}
