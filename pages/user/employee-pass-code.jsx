import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layout/default-layout";

export default function EmployeePassCodePage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Pass code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Pass code
    </DefaultLayout>
  );
}
