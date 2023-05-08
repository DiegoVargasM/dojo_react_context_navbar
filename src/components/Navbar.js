import { useContext } from "react";
import UserContext from "./UserContext";
import "./Navbar.css";

const Navbar = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="navbar">
      Hello,{" "}
      {userContext.name === "" ? "no identificado!" : userContext.name + "!"}
    </div>
  );
};

export default Navbar;
