import { HabitsProvider } from "./Habits/index";
import { ActivitiesHabitsApiProvider } from "./activitiesHabitsApi/index";
import { GoalsHabitsApiProvider } from "./goalsHabitsApi/index";
import { UserProvider } from "./User/index";
import { GroupsProvider } from "./Groups/index";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ActivitiesHabitsApiProvider>
        <GoalsHabitsApiProvider>
          <GroupsProvider>
            <HabitsProvider>{children}</HabitsProvider>
          </GroupsProvider>
        </GoalsHabitsApiProvider>
      </ActivitiesHabitsApiProvider>
    </UserProvider>
  );
};

export default Providers;
