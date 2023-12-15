import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import "./Header.css";
const Header = () => {
  return (
    <div className="containerMy">
      <Banner></Banner>
      <Nav></Nav>
    </div>
  );
};

export default Header;
