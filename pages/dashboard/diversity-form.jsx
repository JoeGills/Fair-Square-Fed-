import Head from "next/head";
import Image from "next/image";
import SharedLayout from "../../components/layout/shared-layout";

export default function DiversityFormPage() {
  return (
    <SharedLayout>
      <Head>
        <title>DiversityForm</title>
      </Head>
      <div className="body">Form goes here</div>

      <style jsx>
        {`
          .body {
            padding: 5rem;
          }
        `}
      </style>
    </SharedLayout>
  );
}
