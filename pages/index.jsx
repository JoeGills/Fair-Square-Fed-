import Head from "next/head";
import DefaultLayout from "../components/layout/default-layout";
import Carousel from "../components/carousel";
import ProgressBar from "../components/progressbar";
import Cards from "../components/layout/information-cards";
import Image from "next/image";
import NavLink from "next/link";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Fair&Square - Home Page</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante dolor, varius eget nulla at"
        />
        <meta name="keywords" content="Lorem ipsum dolor sit amet" />
      </Head>

      <div className="body">
        <div className="d-flex body-content align-items-center justify-content-center">
          <div className="card text-center card-info">
            <div className="card-body">
              <h5 className="card-title">Are you ready?</h5>
              <p className="card-text">
                At Fair&Square, we understand the importance of data security.
                That's why we have implemented the highest standards of security
                to ensure that all data collected is kept safe and confidential.
                We use state-of-the-art encryption technology and follow
                industry best practices to protect our customers' data.
                <br />
                <br />
                <Image
                  width="307"
                  height="76"
                  src="/information.svg"
                  alt="Information about Fair&Square"
                />
              </p>

              <NavLink
                href="/user/employee-preference"
                className="btn btn-success"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
        <div className="body-cards">
          <Cards />
        </div>
      </div>

      <style jsx>{`
        .body {
          height: 100vh;
        }

        .body-content {
          height: calc(100% - 250px);
        }

        .body-cards {
          background: red;
          height: 100%;
        }
      `}</style>
    </DefaultLayout>
  );
}
