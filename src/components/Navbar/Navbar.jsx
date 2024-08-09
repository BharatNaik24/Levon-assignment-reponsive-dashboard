import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import NavAvatar from "../NavAvatar/NavAvatar";
import NavMessage from "../NavMessage/NavMessage";
import NavNotice from "../NavNotice/NavNotice";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <DarkModeToggle />
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Navbar;
