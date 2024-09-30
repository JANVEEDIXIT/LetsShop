import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="flex sticky top-0 bg-white justify-between items-center font-bold shadow-lg text-gray-700">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="ml-4 mt-2 mb-2 w-20 h-20 cursor-pointer"
        />
        <div className="ml-8 mt-2">MEN</div>
        <div className="ml-8 mt-2">WOMEN</div>
        <div className="ml-8 mt-2">KIDS</div>
        <div className="ml-8 mt-2">HOME & LIVING</div>
        <div className="ml-8 mt-2">BEAUTY</div>
        <div className="ml-8 mt-2">STUDIO</div>
      </div>

      <div className="bg-gray-100 ml-12 mt-2 flex items-center w-[500px] h-10">
        <FontAwesomeIcon
          className="m-2 w-10 h-5 text-gray-500"
          icon={faMagnifyingGlass}
        />
        <input
          className="bg-gray-100 flex-grow focus:outline-none focus:border-transparent font-normal font-sans"
          placeholder="Search for products, brands and more"
        ></input>
      </div>
      <div className="flex items-center ml-4">
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="w-10 h-5" />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faHeart} className="m-2 w-10 h-5" />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faBagShopping} className="m-2 w-10 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
