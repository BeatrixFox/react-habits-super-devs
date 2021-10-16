import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

export const UserHabitsApiContext = createContext();

export const UserHabitsApiProvider = ({ children }) => {
    const [userSignupSuccess, setSignupSuccess] = useState();
    const [userId, setUserId] = useState();

    const [accessToken] = useState(
        JSON.parse(localStorage.getItem("@Habit:access")) || ""
    );

    const userSignup = (userData) => {
        api.post("/users/", userData)
            .then((response) => {
                toast.success("Conta criada com sucesso!");
                setSignupSuccess(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const userLogin = (userData) => {
        api.post("/sessions/", userData)
            .then((response) => {
                const { access } = response.data;
                toast.success("Login efetuado com sucesso!");
                localStorage.setItem("@Habit:access", JSON.stringify(access));
                const decoded = jwtDecode(access);
                setUserId(decoded?.user_id);
            })
            .catch((err) => console.log(err));
    };

    const userProfileUpdate = (newUser, idUser) => {
        console.log(newUser, idUser);
        api.patch(
            `/users/${idUser}/`,
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
                userProfileUpdate,
            }}
        >
            {children}
        </UserHabitsApiContext.Provider>
    );
};
