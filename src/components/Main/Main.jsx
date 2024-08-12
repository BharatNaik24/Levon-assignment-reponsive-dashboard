import Dashboard from "../Dashboard/Dashboard";
import PageTitle from "../PageTitle/PageTitle";
import "./Main.css";

function Main() {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <Dashboard />
    </main>
  );
}

export default Main;
