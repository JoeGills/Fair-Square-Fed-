import Card from "../card";
import {
  MdOutlineSecurity,
  MdStackedLineChart,
  MdBalance,
} from "react-icons/md";

export default function InformationCards({ children }) {
  return (
    <div className="information-cards">
      {/* Three columns of text below the carousel */}
      <div className="row">
        <div className="col-lg-4 card-container">
          <Card
            title={"Progress"}
            text={
              "We use reliable and ethical methods to collect and analyze data on diversity. We protect the privacy and confidentiality of our data sources. We use the insights from our data to inform our actions and policies. We aim to promote fairness and justice for all."
            }
            icon={<MdStackedLineChart />}
          ></Card>
        </div>
        <div className="col-lg-4 card-container">
          <Card
            title={"Equality"}
            text={
              "We welcome people of all backgrounds, identities, and perspectives to join our community. We foster a culture of inclusion, respect, and collaboration. We celebrate our differences and learn from each other. We strive to create a better world for everyone."
            }
            icon={<MdBalance />}
          ></Card>
        </div>
        <div className="col-lg-4 card-container">
          <Card
            title={"Security"}
            text={
              "We use advanced encryption, authentication, and authorization methods to protect your data. We do not share your personal information with third parties without your consent. We respect your rights and preferences regarding your data."
            }
            icon={<MdOutlineSecurity />}
          ></Card>
        </div>
      </div>

      <style jsx>
        {`
          .information-cards {
            width: 100vw;
            margin: 2rem auto 0 auto;
            padding: 2rem 5rem 0rem 5rem;
            background-image: linear-gradient(
              to bottom,
              #d9dde6,
              #fff 100px,
              #d9dde6 10000px
            );
            background-size: 100% 60%;
            background-position: 100% 100%;
            background-repeat: no-repeat;
          }

          .marketing .card-container {
            padding: 3rem;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .marketing .card-container p {
            margin-right: 0.75rem;
            margin-left: 0.75rem;
          }
        `}
      </style>
    </div>
  );
}
