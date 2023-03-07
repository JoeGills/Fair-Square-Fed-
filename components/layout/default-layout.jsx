import Head from "next/head";
import Jumbotron from "../jumbotron";
import Navbar from "./navbar";
import Card from "../card";
import {
  MdOutlineSecurity,
  MdStackedLineChart,
  MdBalance,
} from "react-icons/md";

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

          {/* 
          Marketing messaging and featurettes
          ==================================================
          Wrap the rest of the page in another container to center all the content. */}

          <div className="container marketing">
            {/* Three columns of text below the carousel */}
            <div className="row">
              <div className="col-lg-4 card-container">
                <Card
                  title={"Progress"}
                  text={
                    "We use reliable and ethical methods to collect and analyze data on diversity. We protect the privacy and confidentiality of our data sources. We use the insights from our data to inform our actions and policies. We aim to promote fairness and justice for all."
                  }
                  icon={<MdStackedLineChart />}
                ></Card>
              </div>
              <div className="col-lg-4 card-container">
                <Card
                  title={"Equality"}
                  text={
                    "We welcome people of all backgrounds, identities, and perspectives to join our community. We foster a culture of inclusion, respect, and collaboration. We celebrate our differences and learn from each other. We strive to create a better world for everyone."
                  }
                  icon={<MdBalance />}
                ></Card>
              </div>
              <div className="col-lg-4 card-container">
                <Card
                  title={"Security"}
                  text={
                    "We use advanced encryption, authentication, and authorization methods to protect your data. We do not share your personal information with third parties without your consent. We respect your rights and preferences regarding your data."
                  }
                  icon={<MdOutlineSecurity />}
                ></Card>
              </div>
            </div>

            <hr className="featurette-divider" />
            <Jumbotron></Jumbotron>

            <hr className="featurette-divider" />
            <Jumbotron></Jumbotron>

            <hr className="featurette-divider" />
            <Jumbotron></Jumbotron>

            <hr className="featurette-divider" />
          </div>

          <footer className="container">
            <p className="float-end">
              <a href="#">Back to top</a>
            </p>
            <p>
              &copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
              &middot; <a href="#">Terms</a>
            </p>
          </footer>
        </main>
      </div>
      <style jsx>{`
        /* GLOBAL STYLES
        -------------------------------------------------- */
        /* Padding below the footer and lighter body text */

        .body {
          padding-bottom: 3rem;
          color: #5a5a5a;
        }

        /* MARKETING CONTENT
        -------------------------------------------------- */

        /* Center align the text within the three columns below the carousel */
        .marketing .card-container {
          padding: 3rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .marketing h2 {
          font-weight: 400;
        }

        /* rtl:begin:ignore */
        .marketing .card-container p {
          margin-right: 0.75rem;
          margin-left: 0.75rem;
        }
        /* rtl:end:ignore */

        /* Featurettes
        ------------------------- */

        .featurette-divider {
          margin: 5rem 0; /* Space out the Bootstrap <hr> more */
        }

        /* Thin out the marketing headings */
        .featurette-heading {
          font-weight: 300;
          line-height: 1;
          /* rtl:remove */
          letter-spacing: -0.05rem;
        }

        /* RESPONSIVE CSS
        -------------------------------------------------- */

        @media (min-width: 40em) {
          /* Bump up size of carousel content */
          .carousel-caption p {
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
          }

          .featurette-heading {
            font-size: 50px;
          }
        }

        @media (min-width: 62em) {
          .featurette-heading {
            margin-top: 7rem;
          }
        }
      `}</style>
    </>
  );
}
