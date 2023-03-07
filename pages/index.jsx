import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layout/default-layout";
import { MdStackedLineChart } from "react-icons/md";
import Carousel from "../components/carousel";
import VideoPlayer from "../components/videoPlayer";

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

      <Carousel />
    </DefaultLayout>
  );
}
