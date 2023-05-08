import { useContext } from "react";
import UserContext from "./UserContext";

function Navbar() {
	const userContext = useContext(UserContext);

	return <div>Hello, {userContext.name}!</div>;
}

export default Navbar;