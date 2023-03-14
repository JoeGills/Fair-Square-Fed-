import {
  MdOutlineSecurity,
  MdStackedLineChart,
  FaBalanceScale,
} from "react-icons/md";

export default function Card({ icon, title, text }) {
  return (
    <>
      <div className="card">
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <style jsx>
        {`
          .card {
            background: linear-gradient(0deg, #e8f1f5, #e8f1f5);
            box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
            width: 100%;
            padding: 1rem;
            border-radius: 1rem;
            text-align: center;
            margin: 0 0 2rem 0;
            height:200px;
          }

          .card p {
            color: #382851;
            font-size: 0.8rem;
          }

          .card h3 {
            padding: 1rem;
            font-size: 1.2rem;
            color: #382851;
            font-size: 1rem;
          }

          .card span {
            font-size: 2rem;
            color: #45629a;
          }
        `}
      </style>
    </>
  );
}
