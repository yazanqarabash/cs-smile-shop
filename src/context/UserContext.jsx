import * as React from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
    cardName: "",
    cardNumber: "",
    cardExpDate: "",
    cardCvv: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const resetUserData = () => {
    setUserData({});
    setErrors({});
  };

  return (
    <UserContext.Provider
      value={{
        handleChange,
        userData,
        errors,
        setErrors,
        setUserData,
        resetUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
