import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layout/default-layout";

export default function DiversityFormPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>DiversityForm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      DiversityForm
    </DefaultLayout>
  );
}
