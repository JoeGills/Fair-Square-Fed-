import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layout/default-layout";

export default function EmployeePreferencePage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Preference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Preference
    </DefaultLayout>
  );
}
