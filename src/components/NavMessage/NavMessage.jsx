import axios from "axios";
import "./NavMessage.css";
import { useState, useEffect } from "react";

function NavMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/comments")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i
          className="bi bi-chat-left-text"
          style={{
            fontSize: "34px",
            textDecoration: "none",
          }}
        ></i>
        <span className="badge bg-success badge-number">{messages.length}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have {messages.length} new messages{" "}
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
                <img
                  src={`https://i.pravatar.cc/150?img=${msg.id}`} // Placeholder image URL based on `msg.id`
                  alt={`Profile of ${msg.name}`}
                  className="rounded-circle"
                />
                <div>
                  <h4>{msg.name}</h4>
                  <p>{msg.body}</p>
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
