import NavLink from "next/link";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="/" style={{ color: "white" }}>
            Navbar
          </NavLink>
          <NavLink className="navbar-brand" href="/" style={{ color: "white" }}>
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
                <a className="nav-link" aria-current="page" href="#about-us">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Cotact us
                </a>
              </li>
            </ul>
            <div className="d-flex login-link">
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
        `}
      </style>
    </>
  );
}
