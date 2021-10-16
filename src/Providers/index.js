import { HabitsProvider } from "./Habits/index";
import { ActivitiesHabitsApiProvider } from "./activitiesHabitsApi/index";
import { GoalsHabitsApiProvider } from "./goalsHabitsApi/index";
import { UserHabitsApiProvider } from "./userHabitsApi/index";
import { GroupsProvider } from "./Groups/index";

export const Providers = ({ children }) => {
  return (
    <ActivitiesHabitsApiProvider>
      <GoalsHabitsApiProvider>
        <UserHabitsApiProvider>
          <GroupsProvider>
            <HabitsProvider>{children}</HabitsProvider>
          </GroupsProvider>
        </UserHabitsApiProvider>
      </GoalsHabitsApiProvider>
    </ActivitiesHabitsApiProvider>
  );
};
