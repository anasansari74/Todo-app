import styled from "styled-components";
import useStore from "../store";

function Todos() {
  const users = useStore(store => store.users);
  let selectedUser = useStore(store => store.selectedUser);
  const todos = useStore(store => store.todos);
  const handleSubmit = useStore(store => store.handleSubmit);
  const logOut = useStore(store => store.logOut);

  const currentUser = users.find(user => user.id === selectedUser);

  if (currentUser === undefined) return (selectedUser = null);

  return (
    <div className="wrapper">
      <h1>{currentUser.name}'s Todo App</h1>
      <form
        className="addTodoForm"
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <input required name="todo" type="text" placeholder="enter todo..." />
        <button>ADD TODO!</button>
      </form>
      <ul className="todos">
        {todos.map((todo, index) => (
          <li key={index} className="todo">
            {todo}
          </li>
        ))}
      </ul>
      <ul>
        <button onClick={logOut}>Log Out!</button>
      </ul>
    </div>
  );
}

export default styled(Todos)``;
