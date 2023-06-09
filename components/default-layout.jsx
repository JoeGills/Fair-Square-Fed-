import Head from "next/head";
import Sidebar from "./sidebar";
import Cards from "./information-cards";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Hugo 0.84.0" />

        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="body">
        <header></header>

        <main>
          <Sidebar />
          <div className="content">{children}</div>
        </main>
      </div>

      <style jsx>{`
        .body {
          height: 100%;
        }
        main {
          display: flex;
          flex-wrap: nowrap;
          height: 100vh;
          max-height: 100vh;
          overflow-x: auto;
          overflow-y: hidden;
        }
        .content {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
