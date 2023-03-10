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
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Are you ready?</h5>
            <p class="card-text">
              This is a description on what this trait means. This is a
              description on what this trait means. This is a description on
              what this trait means. This is a description on what this trait
              means. This is a description on what this trait means.
            </p>
            <a href="#" class="btn btn-success">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
