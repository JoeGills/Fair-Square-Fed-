import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layout/default-layout";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Welcome
    </DefaultLayout>
  );
}
