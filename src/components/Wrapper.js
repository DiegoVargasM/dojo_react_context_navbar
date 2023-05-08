import React, { useState } from "react";
import Navbar from "./Navbar";
import FormWrapper from "./FormWrapper";
import UserContext from "./UserContext";

const Wrapper = () => {
  const [name, setName] = useState("");
  const userContextValue = { name, setName };

  return (
    <UserContext.Provider value={userContextValue}>
      <Navbar />
      <FormWrapper />
    </UserContext.Provider>
  );
};

export default Wrapper;
