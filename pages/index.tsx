import Header from "@/components/organisms/header";
import About from "@/components/templates/about";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tamao-js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`my-8 lg:my-32`}>
        <Header />
        <About />
      </main>
    </>
  );
}
