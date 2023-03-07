import Head from "next/head";
import SharedLayout from "../../components/layout/shared-layout";

export default function LayoutSharedTest() {
  return (
    <SharedLayout>
      <Head>
        <title>LayoutDefaultTest</title>
        <meta name="description" content="" />
      </Head>
      <div className="body">Form Here</div>

      <style jsx>{`
        .body {
          padding-top: 5rem;
          padding-bottom: 3rem;
          color: #5a5a5a;
        }
      `}</style>
    </SharedLayout>
  );
}
