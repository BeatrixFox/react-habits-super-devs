import { UserHabitsApiProvider } from "./userHabitsApi";
import { ActivitiesHabitsApiProvider } from "./activitiesHabitsApi";
import { GoalsHabitsApiProvider } from "./goalsHabitsApi";

const Providers = ({ children }) => {
    return (
        <UserHabitsApiProvider>
            <ActivitiesHabitsApiProvider>
                <GoalsHabitsApiProvider>{children}</GoalsHabitsApiProvider>
            </ActivitiesHabitsApiProvider>
        </UserHabitsApiProvider>
    );
};

export default Providers;
