import "./Header.css";
import Logo from "../Logo/Logo";
import Searchbar from "../SearchBar/searchbar";
import Navbar from "../Navbar/navbar";

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
