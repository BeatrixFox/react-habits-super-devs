import { UserHabitsApiProvider } from "./userHabitsApi";
import { ActivitiesHabitsApiProvider } from "./activitiesHabitsApi";

const Providers = ({ children }) => {
    return (
        <UserHabitsApiProvider>
            <ActivitiesHabitsApiProvider>
                {children}
            </ActivitiesHabitsApiProvider>
        </UserHabitsApiProvider>
    );
};

export default Providers;
