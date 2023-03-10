import Head from "next/head";
import DefaultLayout from "../components/layout/default-layout";
import Carousel from "../components/carousel";

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
      <div className="body d-flex align-items-center justify-content-center">
        <div className="card text-center card-info">
          <div className="card-body">
            <h5 className="card-title">Are you ready?</h5>
            <p className="card-text">
              This is a description on what this trait means. This is a
              description on what this trait means. This is a description on
              what this trait means. This is a description on what this trait
              means. This is a description on what this trait means.
            </p>
            <a href="#" className="btn btn-success">
              Get Started
            </a>
          </div>
        </div>
        <Cards />
      </div>

      <style jsx>{`
        .body {
          height: 100%;
        }
      `}</style>
    </DefaultLayout>
  );
}
