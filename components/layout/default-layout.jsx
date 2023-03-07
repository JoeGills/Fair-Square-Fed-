import Carousel from "../caousel";
import Card from "../card";
import Navbar from "./navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div>{children}</div>
        Test
      </main>
      <article>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </article>
      <article></article>
    </>
  );
}
