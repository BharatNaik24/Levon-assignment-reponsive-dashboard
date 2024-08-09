import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={backToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${
        scroll > 100 ? "active" : ""
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}

export default BackToTop;
