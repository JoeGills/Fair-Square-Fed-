import Image from "next/image";

export default function AboutUs({ children }) {
  return (
    <>
      <div className="row featurette" id="about-us">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            About Us
            {/* <span className="text-muted">It’ll blow your mind.</span> */}
          </h2>
          <div className="lead">
            <div>
              <p>
                At Fair&Square, we are dedicated to helping organizations create
                more diverse and inclusive workplaces. We believe that a diverse
                workforce leads to better decision-making, improved innovation,
                and increased employee engagement and satisfaction.
              </p>
              <h3>Our Product</h3>
              <p>
                We offer a unique product that allows companies to anonymously
                track and analyze their hiring and promotion practices. Our
                platform identifies areas where diversity can be improved and
                provides actionable insights to help organizations create more
                inclusive hiring and promotion processes.
              </p>
              <h3>Security</h3>
              <p>
                At Fair&Square, we understand the importance of data security.
                That's why we have implemented the highest standards of security
                to ensure that all data collected is kept safe and confidential.
                We use state-of-the-art encryption technology and follow
                industry best practices to protect our customers' data.
              </p>
              {/* <h3>Our Values</h3>
              <p>
                At the core of our values is equality. We believe that every
                person deserves equal opportunities and treatment, regardless of
                their background or identity. We strive to create a more
                equitable and just workplace for all employees, where everyone
                feels valued and included.
              </p>
              <h3>Our Mission</h3>
              <p>
                Our mission is to help organizations create more diverse and
                inclusive workplaces. We believe that by providing companies
                with the tools and insights they need to improve their hiring
                and promotion practices, we can make a positive impact on the
                lives of employees and help build a more equitable society.
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <Image
            alt="about us"
            src="/aboutus.png"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            role="img"
            aria-label="Placeholder: 500x500"
            focusable="false"
          />
        </div>
      </div>

      <style jsx>
        {`
          .lead h3 {
            font-size: 1.1rem;
          }
          .featurette-heading {
            font-weight: 300;
            line-height: 1;
            letter-spacing: -0.05rem;
          }

          @media (min-width: 40em) {
            .featurette-heading {
              font-size: 50px;
            }
          }

          @media (min-width: 62em) {
            .featurette-heading {
              margin-top: 0rem;
            }
          }
        `}
      </style>
    </>
  );
}
