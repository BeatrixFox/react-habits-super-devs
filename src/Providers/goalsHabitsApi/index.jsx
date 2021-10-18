import { createContext, useState } from "react";

import api from "../../services/api";

export const GoalsHabitsApiContext = createContext();

export const GoalsHabitsApiProvider = ({ children }) => {
    const [accessToken] = useState(
        JSON.parse(localStorage.getItem("@Habit:access")) || ""
    );

    const [goalCreated, setGoalCreated] = useState();
    const [goalUpdated, setGoalUpdated] = useState();
    const [goalGot, setGoalGot] = useState();
    const [groupedGoals, setGroupedGoals] = useState([]);

    const createGoal = (title, difficulty, how_much_achieved, group) => {
        api.post(
            "/goals/",
            {
                title: title,
                difficulty: difficulty,
                how_much_achieved: how_much_achieved,
                group: group,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
            .then((response) => setGoalCreated(response.data))
            .catch((err) => console.log(err));
    };

    const updateGoal = () => {
        api.patch(
            "/goals/",
            {
                achieved: true,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
            .then((response) => setGoalUpdated(response.data))
            .catch((err) => console.log(err));
    };

    const deleteGoal = (goalId) => {
        api.delete(`/goals/${goalId}/`, {
            header: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => console.log("ok"))
            .catch((err) => console.log(err));
    };

    const getOneGoal = (goalId) => {
        api.get(`/goals/${goalId}/`)
            .then((response) => setGoalGot(response.data))
            .catch((err) => console.log(err));
    };

    const getGroupGoals = (groupId, groupPage = 1) => {
        api.get(`/goals/?group=${groupId}&page=${groupPage}`)
            .then((response) =>
                setGroupedGoals(...groupedGoals, response.data.results)
            )
            .catch((err) => console.log(err));
    };

    return (
        <GoalsHabitsApiContext.Provider
            value={{
                createGoal,
                goalCreated,
                updateGoal,
                goalUpdated,
                deleteGoal,
                getOneGoal,
                goalGot,
                getGroupGoals,
                groupedGoals,
            }}
        >
            {children}
        </GoalsHabitsApiContext.Provider>
    );
};
