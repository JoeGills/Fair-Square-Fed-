import Image from "next/image";
import { useState } from "react";

export default function ContactUs({ children }) {
  let [state, setState] = useState({});

  let Submit = () => {
    setState((prev) => {
      return {
        ...prev,
        submitted: true,
      };
    });
  };

  return (
    <>
      <div className="row featurette" id="contact-us">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Contact Us</h2>
          <div className="lead">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <br />
              {state.submitted ? (
                <div className="alert alert-success">
                  Your contact submitted
                </div>
              ) : (
                <></>
              )}
              <button
                onClick={() => Submit()}
                type="button"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <Image
            alt="contact us"
            src="/contactus.png"
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
