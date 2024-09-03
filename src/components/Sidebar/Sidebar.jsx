import "bootstrap/dist/js/bootstrap.bundle.min.js";
import navList from "../../data/navItem";
import "./Sidebar.css";

function Sidebar() {
  const sidebarItems = [
    {
      label: "Dashboard",
      icon: "bi bi-grid gridicon",
      link: "/",
    },
    {
      label: "Documents",
      icon: "bi bi-menu-button-wide",
      link: "#",
      target: "#documents-nav",
      items: [
        { label: "Customers", link: "/customers" },
        { label: "Suppliers", link: "#" },
      ],
    },
    {
      label: "Forms",
      icon: "bi bi-journal-text",
      link: "#",
      target: "#forms-nav",
      items: [
        { label: "Application Form", link: "#" },
        { label: "Release Form", link: "#" },
        { label: "Cancellation Form", link: "#" },
      ],
    },
    {
      label: "Charts",
      icon: "bi bi-bar-chart",
      link: "#",
      target: "#charts-nav",
      items: [
        { label: "General Tables", link: "#" },
        { label: "Data Tables", link: "#" },
      ],
    },
    {
      label: "Nested Forms",
      icon: "bi bi-journal-text",
      link: "#",
      target: "#nested-forms-nav",
      items: [{ label: "Application Form", link: "#" }],
    },
    {
      label: "Tables",
      icon: "bi bi-table",
      link: "#",
      target: "#tables-nav",
      items: [
        { label: "Basic Table", link: "#" },
        { label: "Advanced Table", link: "#" },
      ],
    },
  ];

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {sidebarItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              href={item.link}
              className={`nav-link ${item.items ? "collapsed" : ""}`}
              data-bs-target={item.target || ""}
              data-bs-toggle={item.items ? "collapse" : ""}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
              {item.items && <i className="bi bi-chevron-down ms-auto"></i>}
            </a>

            {item.items && (
              <ul
                id={item.target.substring(1)}
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.link}>
                      <i className="bi bi-circle"></i>
                      <span>{subItem.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <li className="nav-heading">Pages</li>
      <ul className="sidebar-nav" id="sidebar-nav-pages">
        {navList.map((eachItem) => (
          <li className="nav-item" key={eachItem._id}>
            <a className="nav-link collapsed" href={eachItem.link || "#"}>
              <i className={eachItem.icon}></i>
              <span>{eachItem.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
