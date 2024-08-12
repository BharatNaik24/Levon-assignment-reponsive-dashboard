import "./Logo.css";

function Logos() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div className="d-flex align-items-center justify-content-between logo">
      <a href="#" className="d-flex align-items-center">
        {/* <img src="https://i.imgur.com/6Q8UgBp.png" alt="Logo" /> */}
        <span className="d-none d-lg-block">Admin DashBoard</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i>
    </div>
  );
}

export default Logos;
