import { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import LogIn from "./pages/LogIn";
import Todos from "./pages/Todos";
import useStore from "./store";

function App() {
  const fetchUsers = useStore(store => store.fetchUsers);
  const fetchTodos = useStore(store => store.fetchTodos);
  const selectedUser = useStore(store => store.selectedUser);

  const history = useHistory();

  useEffect(() => {
    if (selectedUser === null) history.push("/login");
    if (selectedUser) history.push(`/user/${selectedUser}`);

    fetchUsers();
    fetchTodos(selectedUser);
  }, [selectedUser, history, fetchUsers, fetchTodos]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/user/:id">
          <Todos />
        </Route>
      </Switch>
    </>
  );
}

export default App;
