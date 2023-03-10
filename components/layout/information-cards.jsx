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
        <div className="col-md-4 card-container">
          <Card
            title={"Progress"}
            text={
              "We use reliable and ethical methods to collect and analyze data on diversity. "
            }
            icon={<MdStackedLineChart />}
          ></Card>
        </div>
        <div className="col-md-4 card-container">
          <Card
            title={"Equality"}
            text={
              "We welcome people of all backgrounds, identities, and perspectives to join our community."
            }
            icon={<MdBalance />}
          ></Card>
        </div>
        <div className="col-md-4 card-container">
          <Card
            title={"Security"}
            text={
              "We use advanced encryption, authentication, and authorization methods to protect your data."
            }
            icon={<MdOutlineSecurity />}
          ></Card>
        </div>
      </div>

      <style jsx>
        {`
          .information-cards {
            width: calc(100vw - 280px);
            margin: 0;
            padding: 2rem 5rem 2rem 5rem;
            background-color: #5e6c99;
            background-size: 100% 60%;
            background-position: 100% 100%;
            background-repeat: no-repeat;
          }

          .marketing .card-container {
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
