import { useState, useEffect } from "react";
import axios from "axios";
import "./navNotice.css";

function NavMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch data using axios
    axios
      .get("https://fake-json-api.mock.beeceptor.com/notifications")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i
          className="bi bi-bell"
          style={{
            fontSize: "34px",
            textDecoration: "none",
          }}
        ></i>

        <span className="badge bg-success badge-number">{messages.length}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have {messages.length} Notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        {messages.map((msg) => (
          <li key={msg.id}>
            <div className="message-item">
              <a href="#">
                <h6>{msg.title}</h6>
                <div>
                  <h4>{msg.name}</h4>
                  <p>{msg.message}</p>
                  <p>
                    {msg.timestamp.slice(0, 10)} {msg.timestamp.slice(11, 16)}
                  </p>
                </div>
              </a>
            </div>
            <hr className="dropdown-divider" />
          </li>
        ))}

        <li className="dropdown-footer p-3">
          <a href="#">Show all messages</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
