import { Link } from "react-router-dom";
import "./customers.css";
// const URL = "https://fake-json-api.mock.beeceptor.com/customers";
function Customers() {
  return (
    <main>
      <h1>Customers Page</h1>
      <Link to="/customers" className="btn btn-primary">
        Go to Customers
      </Link>
    </main>
  );
}

export default Customers;
