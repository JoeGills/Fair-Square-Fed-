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

      <div>Hello Content</div>
    </DefaultLayout>
  );
}
