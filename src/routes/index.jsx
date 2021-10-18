import { Switch, Route } from "react-router-dom";
import Signup from "../pages/Signup/index";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";
import Group from "../pages/Group/index";
import Groups from "../pages/Groups/index";
import MyGroups from "../pages/MyGroups/index";
import Habits from "../pages/Habits/index";
import Home from "../pages/Home/index";

export const Routes = () => {
  return (
    <>      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/groups">
          <Groups />
        </Route>
        <Route exact path="/my_groups">
          <MyGroups />
        </Route>
        <Route exact path="/group">
          {/* aqui vai mudar para :id */}
          <Group />
        </Route>
        <Route exact path="/habits">
          <Habits />
        </Route>
      </Switch>
    </>
  );
};
