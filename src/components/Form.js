import { useContext, useState } from "react";
import UserContext from "./UserContex";

const Form = () => {
	const [name, setName] = useState("")
	const userContext = useContext(UserContext)

	const handleChange = (e) => {
		setName(e.target.value)
		userContext.setName(e.target.value)
	}

	return (
		<form>
			<input
				type="text"
				placeholder="John Doe"
				value={name}
				onChange={(handleChange)}
			/>
		</form>
	)
}

export default Form;