import Head from "next/head";
import Image from "next/image";
import { MdStackedLineChart } from "react-icons/md";
import Carousel from "../../components/caousel";
import Jumbotron from "../../components/jumbotron";
import DefaultLayout from "../../components/layout/default-layout";
import Navbar from "../../components/layout/navbar";

export default function LayoutDefaultTest() {
  return (
    <DefaultLayout>
      <Head>
        <title>LayoutDefaultTest</title>
        <meta name="description" content="" />
      </Head>
      <Carousel></Carousel>
    </DefaultLayout>
  );
}
