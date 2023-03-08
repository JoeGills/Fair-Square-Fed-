import { HiInformationCircle } from "react-icons/hi";

export default function FormLayout({ children, title }) {
  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="formContainer">
            <div className="formTitle">
              <div className="alert alert-primary d-flex align-items-center">
                <div className="bi flex-shrink-0 me-2 icon">
                  <HiInformationCircle />
                </div>
                <h3>{title}</h3>
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .icon {
          font-size: 4rem;
          color: #6049a2;
        }

        .alert {
          background: none;
          border: 0 none;
        }

        .alert p {
          text-align: left;
        }

        .alert h3 {
          font-size: 1rem;
          color: #000;
          text-align: left;
          padding-top: 1.4rem;
        }

        .formContainer {
          width: auto;
          background-color: hsl(0, 100%, 100%);
          box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
          padding: 1rem;
          padding-bottom: 3rem;

          border-radius: 1rem;
          margin: 0 auto;
          text-align: center;
        }

        .formTitle {
          margin: 0;
          font-size: 1.2rem;
          flex-direction: row;
        }
      `}</style>
    </>
  );
}
