import Image from "next/image";
import logo from "../components/logos/logo.png";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <video className="video" autoPlay loop muted>
        <source src="./media/slide.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="carousel-overlay">
        <div className="d-block w-100">
          {/* <Image className="logo" src={logo} alt="logo" /> */}
          <h1>FAIR & SQUARE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            felis elit, bibendum vel faucibus ac, sollicitudin a erat. Maecenas
            et suscipit lectus. Etiam maximus sem turpis, eu pretium sem euismod
            id. Maecenas sit amet justo non tortor aliquam tempor.{" "}
          </p>
          <button type="button" className="btn btn-success">
            Get Started
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
