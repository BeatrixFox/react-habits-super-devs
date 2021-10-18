import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

export const UserHabitsApiContext = createContext();

export const UserHabitsApiProvider = ({ children }) => {
  const [userSignupSuccess, setSignupSuccess] = useState();
  const [userId, setUserId] = useState();
  const [authorized, setAuthorized] = useState(false);

  const [accessToken] = useState(
    JSON.parse(localStorage.getItem("@Habit:access")) || ""
  );

  const userSignup = (userData) => {
    api
      .post("/users/", userData)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        setSignupSuccess(response.data);
      })
      .catch((err) => {
        toast.error(`erro ao criar --- ${err}`);
      });
  };

  const userLogin = (userData) => {
    api
      .post("/sessions/", userData)
      .then((response) => {
        const { access } = response.data;
        toast.success("Login efetuado com sucesso!");
        localStorage.setItem("@Habit:access", JSON.stringify(access));
        // const decoded = jwtDecode(access);
        // setUserId(decoded?.user_id);
        setAuthorized(true);
      })
      .catch((err) => toast.error(`Falha! Senha ou email incorreto => ${err}`));
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Habit:access"));
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded?.user_id);
      setAuthorized(true);
    }
    
  }, [authorized]);

  const userProfileUpdate = (newUser, userId) => {
    api.patch(
      `/users/${userId}/`,
      {
        username: newUser,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  return (
    <UserHabitsApiContext.Provider
      value={{
        userSignup,
        userSignupSuccess,
        userLogin,
        userId,
        setUserId,
        userProfileUpdate,
        authorized,
        setAuthorized,
      }}
    >
      {children}
    </UserHabitsApiContext.Provider>
  );
};
