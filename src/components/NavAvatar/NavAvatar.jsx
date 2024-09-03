import "./NavAvatar.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import axios from "axios";

const menuItems = [
  {
    id: uuidv4(),
    href: "user-profile.html",
    iconClass: "bi bi-person",
    text: "My Profile",
  },
  {
    id: uuidv4(),
    href: "account-settings.html",
    iconClass: "bi bi-gear",
    text: "Account Settings",
  },
  {
    id: uuidv4(),
    href: "pages-faq.html",
    iconClass: "bi bi-question-circle",
    text: "Need Help?",
  },
  {
    id: uuidv4(),
    href: "#",
    iconClass: "bi bi-box-arrow-right",
    text: "Sign Out",
  },
];

function NavAvatar() {
  const [user, setUser] = useState({
    name: "bharat",
    role: "web developer",
  });

  useEffect(() => {
    axios
      .get("https://fake-json-api.mock.beeceptor.com/users/1")
      .then((response) => {
        const { username, name, role, photo } = response.data;
        setUser({ username, role, photo, name });
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <li className="me-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img
          src={user.photo}
          alt="profile"
          className="rounded-circle"
          style={{ width: "40px" }}
        />
        <span className="ms-2">{user.username}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{user.name}</h6>
          <span>Web Developer</span>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        {menuItems.map((item, index) => (
          <li key={item.id}>
            <a
              className="dropdown-item d-flex align-items-center"
              href={item.href}
            >
              <i className={item.iconClass}></i>
              <span className="ms-2">{item.text}</span>
            </a>
            {index < menuItems.length - 1 && (
              <hr className="dropdown-divider" />
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default NavAvatar;
