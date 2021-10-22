import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [userSignupSuccess, setSignupSuccess] = useState();
    const [userId, setUserId] = useState();
    const [authorized, setAuthorized] = useState(false);
    const [config, setConfig] = useState({});
    const [actualUser, setActualUser] = useState({});

    const [accessToken, setAccessToken] = useState(
        JSON.parse(localStorage.getItem("@Habit:access")) || ""
    );

    useEffect(() => {
        setConfig({
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    }, [accessToken]);

    const userSignup = (userData) => {
        api.post("/users/", userData)
            .then((response) => {
                toast.success("Conta criada com sucesso!");
                setSignupSuccess(response.data);
            })
            .catch((err) => {
                toast.error(`erro ao criar`);
            });
    };

    const userLogin = (userData) => {
        api.post("/sessions/", userData)
            .then((response) => {
                const { access } = response.data;
                localStorage.setItem("@Habit:access", JSON.stringify(access));
                setAccessToken(access);
                setAuthorized(true);
                toast.success("Login efetuado com sucesso!");
            })
            .catch((err) =>
                toast.error(`Falha! Senha ou email incorreto => ${err}`)
            );
    };


    const getUsers = (userId) => {
        api.get(`/users/${userId}/`)
            .then((response) => {              
              console.log(response.data.username)
              setActualUser({
                name: response.data.username,
                email: response.data.email
              })
            })
            .catch((err) => console.log(userId));
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Habit:access"));
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
            setUserId(decoded?.user_id);
            setAuthorized(true);
            setConfig({
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            getUsers(decoded?.user_id)
        }
    }, [accessToken]);

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
        )
            .then((response) =>
                toast.success(`Usuário alterado. Olá ${response.data.username}`)
            )
            .catch((err) => {
                console.log(err);
                toast.error("Nome inválido");
            });
    };

    

    return (
        <UserContext.Provider
            value={{
                userSignup,
                userSignupSuccess,
                userLogin,
                userId,
                user,
                setUserId,
                userProfileUpdate,
                authorized,
                setAuthorized,
                accessToken,
                config,
                getUsers,
                actualUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
