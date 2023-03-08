import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../../components/layout/default-layout";

export default function LoginPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Login
    </DefaultLayout>
  );
}
