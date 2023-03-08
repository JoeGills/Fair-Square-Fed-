import NavLink from "next/link";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="bg-container">
        <video className="video" autoPlay loop muted>
          <source src="./media/slide.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="carousel-overlay">
        <div className="d-block w-100">
          {/* <Image className="logo" src={logo} alt="logo" /> */}
          <h1>FAIR & SQUARE</h1>
          <p className="content">
            We are focused on helping your company improve diversity and
            inclusivity within their organizations. <br />
            We offer a product that allows companies to anonimosly track and
            analyze their hiring and promotion practices to identify areas where
            diversity can be improved. <br />
            Security is a top priority for us, ensuring that all data collected
            is kept safe and confidential. <br />
            Equality is at the core of our values, and we strive to create a
            more equitable and just workplace for all employees.
          </p>
          <NavLink href="/user/login" className="btn btn-success">
            Get Started
          </NavLink>
        </div>
      </div>

      <style jsx>
        {`
          .content {
            background: rgba(0, 0, 0, 0.2);
            padding: 1rem;
            border-radius: 0.2rem;
            text-shadow: 1px 1px 1px rgb(0, 0, 0, 0.8);
          }

          .carousel-overlay {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 1;
            width: 90%;
            padding: 4rem;
          }

          h1 {
            font-size: 4rem;
            text-shadow: 2px 2px 5px rgba(6, 4, 4, 0.559);
          }

          .bg-container {
            width: 100%;
            height: 60vh;
            overflow: hidden;
            position: relative;
          }

          .bg-container .video {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            top: -50%;
          }
        `}
      </style>
    </div>
  );
}
