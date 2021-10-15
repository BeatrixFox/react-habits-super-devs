import { UserHabitsApiProvider } from './userHabitsApi';

const Providers = ({ children }) => {
    return(
        <UserHabitsApiProvider>
            {children}
        </UserHabitsApiProvider>
    )
}

export default Providers;