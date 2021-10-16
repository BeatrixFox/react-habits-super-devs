import { Switch, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from '../pages/Login';
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
        <Route path="/user_update">
          <h1>Atualização do usuário</h1>
        </Route>
        <Route path="/groups">
          <h1>Grupos</h1>
        </Route>
        <Route path="/my_groups">
          <h1>Grupos do usuário</h1>
        </Route>
        <Route path="/goals">
          <h1>Metas</h1>
        </Route>
        <Route path="/activity">
          <h1>Atividades</h1>
        </Route>
        <Route path="/habits">
          <h1>Hábitos</h1>
        </Route>
      </Switch>
    </>
  );
};
