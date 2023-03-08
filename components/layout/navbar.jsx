import Image from "next/image";
import NavLink from "next/link";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Image
            src="/logo.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          <NavLink
            className="navbar-brand"
            href="/"
            style={{ color: "white", padding: "0.3rem" }}
          >
            Fair&Square
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href={{
                    pathname: "/",
                    hash: "about-us",
                  }}
                  style={{
                    color: "grey",
                  }}
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  href={{
                    pathname: "/",
                    hash: "contact-us",
                  }}
                  style={{
                    color: "grey",
                  }}
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex btn-success">
              <NavLink
                href="/user/login"
                id="login-btn"
                className="login-btn"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar {
            z-index: 10;
          }

          .nav-link {
            color: #eee;
          }

          .nav-link:hover {
            color: red;
          }

          .navbar-brand {
            font-size: 1.4rem;
            padding: 0.3rem;
          }
        `}
      </style>
    </>
  );
}
