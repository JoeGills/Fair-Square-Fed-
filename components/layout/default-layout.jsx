import Head from "next/head";
import AboutUs from "../contents/about-us";
import ContactUs from "../contents/contact-us";
import Navbar from "./navbar";

import InformationCards from "./information-cards";

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

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <header>
          <Navbar />
        </header>

        <main>
          {children}

          <InformationCards />

          {/* 
          Marketing messaging and featurettes
          ==================================================
          Wrap the rest of the page in another container to center all the content. */}

          <div className="container marketing">
            <hr className="featurette-divider" />
            <AboutUs></AboutUs>

            <hr className="featurette-divider" />
            <ContactUs></ContactUs>

            <hr className="featurette-divider" />
          </div>

          <footer className="container">
            <p className="float-end">
              <a href="#">Back to top</a>
            </p>
            <p>
              &copy; 2023 Fair&Square, Inc. &middot; <a href="#">Privacy</a>{" "}
              &middot; <a href="#">Terms</a>
            </p>
          </footer>
        </main>
      </div>
      <style jsx>{`
        .body {
          padding-bottom: 3rem;
          color: #5a5a5a;
        }

        .marketing h2 {
          font-weight: 400;
        }

        .featurette-divider {
          margin: 5rem 0; /* Space out the Bootstrap <hr> more */
        }

        @media (min-width: 40em) {
          .carousel-caption p {
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
          }
        }
      `}</style>
    </>
  );
}
