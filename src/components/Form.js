import { useContext, useState } from "react";
import UserContext from "./UserContext";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const userContext = useContext(UserContext);

  const handleChange = (e) => {
    setName(e.target.value);
    userContext.setName(e.target.value);
  };

  return (
    <form>
      <label htmlFor="nameInput">Ingresa tu nombre:</label>
      <input
        type="text"
        placeholder=" John Doe..."
        value={name}
        onChange={handleChange}
        name="nameInput"
      />
    </form>
  );
};

export default Form;
