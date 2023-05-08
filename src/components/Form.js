import { useContext, useState } from "react";
import UserContext from "./UserContex";

const Form = () => {






	return (
		<form>
			<input
				type="text"
				placeholder="John Doe"
			/* value={name} */
			/* onChange */
			/>
			<button type="submit">Change name</button>


		</form>
	)
}

export default Form;