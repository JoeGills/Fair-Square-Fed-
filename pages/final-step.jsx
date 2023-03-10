import Head from "next/head";
import DefaultLayout from "../components/default-layout";
import Cards from "../components/information-cards";
import Image from "next/image";
import NavLink from "next/link";

export default function FinalStepPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Fair & Square | Thank You!</title>
        <meta
          name="description"
          content=" At Fair&Square, we are dedicated to helping organizations create more diverse and inclusive workplaces."
        />
        <meta
          name="keywords"
          content="Diversity and inclusivity, Workplace diversity, Inclusive hiring practices, Anonymous data tracking and analysis, Employee engagement, Data security and confidentiality, Equality and justice in the workplace, Improving hiring and promotion practices, Equitable society, Positive impact on employees"
        />

        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="body">
        <div className="d-flex body-content align-items-center justify-content-center">
          <div className="card text-center card-info">
            <div className="card-body">
              <h5 className="card-title">
                Thank you for bearing with us all the way!
              </h5>
              <p className="card-text">
                We appreciate your time and feedback. Your responses will help
                us improve the diversity among our company. If you have any
                further questions or comments, please do not hesitate to contact
                us.
                <br />
                <br />
                <br />
                Thank you again for your participation and have a great day!
                <br />
                <br />
                <Image
                  width="307"
                  height="76"
                  src="/information.svg"
                  alt="Information about Fair&Square"
                />
              </p>

              <NavLink href="/" className="btn btn-outline-success">
                Start Over
              </NavLink>
            </div>
          </div>
        </div>
        <div className="body-cards">
          <Cards />
        </div>
      </div>

      <style jsx>{`
        .body {
          height: 100vh;
        }

        .body-content {
          height: calc(100% - 250px);
        }

        .body-cards {
          background: red;
          height: 100%;
        }
      `}</style>
    </DefaultLayout>
  );
}
