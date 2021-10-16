import { Switch, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from '../pages/Login';
import { Dashboard } from "../pages/Dashboard";
import { Group } from "../pages/Group";
import { Groups } from "../pages/Groups";
import { MyGroups } from "../pages/MyGroups/index";
import { Habits } from "../pages/Habits";

export const Routes = () => {
  return (
    <>
      <h3>Aqui vai a barra de navegação</h3>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/user_update">
          <h1>Atualização do usuário</h1>
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/my_groups">
          <MyGroups />
        </Route>
        <Route path="/group">
          {/* aqui vai mudar para :id */}
          <Group />
        </Route>
        <Route path="/goals">
          <h1>Metas</h1>
        </Route>
        <Route path="/activity">
          <h1>Atividades</h1>
        </Route>
        <Route path="/habits">
          <Habits />
        </Route>
      </Switch>
    </>
  );
};
