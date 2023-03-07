export default function Carousel() {
  return (
    <div style={{ minHeight: "80vh", marginBottom: "1rem" }}>
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="80vh"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="#777" />
      </svg>

      <style jsx>
        {`
          /* Carousel base class */
          .carousel {
            margin-bottom: 4rem;
          }
          /* Since positioning the image, we need to help out the caption */
          .carousel-caption {
            bottom: 3rem;
            z-index: 10;
          }

          /* Declare heights because of positioning of img element */
          .carousel-item {
            height: 32rem;
          }
          .carousel-item > img {
            position: absolute;
            top: 0;
            left: 0;
            min-width: 100%;
            height: 32rem;
          }
        `}
      </style>
    </div>
  );
}
