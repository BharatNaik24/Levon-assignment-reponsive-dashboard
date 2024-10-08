import Logo from "../Logo/Logo";
import Searchbar from "../SearchBar/Searchbar";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/*logo*/}
      <Logo />
      {/* {searchBar} */}
      <Searchbar />
      {/* {nabar} */}
      <Navbar />
    </header>
  );
}

export default Header;
