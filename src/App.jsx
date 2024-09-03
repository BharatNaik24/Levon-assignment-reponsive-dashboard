import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
