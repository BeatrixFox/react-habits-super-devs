import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

export const UserHabitsApiContext = createContext();

export const UserHabitsApiProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState([]);
    const [access] = useState(
        JSON.parse(localStorage.getItem("@Habit:access")) || ""
    );

    const userSignup = ({ userData }) => {
        api.post("/users/", userData)
            .then((response) => {
                toast.success("Conta criada com sucesso!");
            })
            .catch((err) => console.log(err));
    };

    const userLogin = ({ userData }) => {
        api.post("/sessions/", userData)
            .then((response) => {
                const { access } = response.data;
                toast.success("Login efetuado com sucesso!");
                localStorage.setItem("Habit:access", JSON.stringify(access));

                const decoded = jwtDecode(access);
            })
            .catch((err) => console.log(err));
    };

    const userProfileUpdate = ({ userData }) => {
        const { id, username } = userData;

        api.patch(
            `/users/${id}`,
            {
                username: username,
            },
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        );
    };

    return (
        <UserHabitsApiContext.Provider
            value={{ userSignup, userLogin, userProfileUpdate }}
        >
            {children}
        </UserHabitsApiContext.Provider>
    );
};
