import { HiInformationCircle } from "react-icons/hi";

export default function FormLayout({ children, title }) {
  return (
    <>
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

        <style jsx>{`
          .icon {
            font-size: 4rem;
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
            width: 605px;
            height: 407px;
            background-color: hsl(0, 100%, 100%);
            box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
            padding: 1rem;
            margin: 3rem;
            border-radius: 1rem;
            margin: auto;
            text-align: center;
          }

          .formTitle {
            margin: 2rem;
            font-size: 1.2rem;
            flex-direction: row;
          }
        `}</style>
      </div>
    </>
  );
}
