import { HabitsProvider } from "./Habits/index";
import { UserHabitsApiProvider } from "./userHabitsApi/index";

export const Providers = ({ children }) => {
  return (
    <UserHabitsApiProvider>
      <HabitsProvider>{children}</HabitsProvider>
    </UserHabitsApiProvider>
  );
};
