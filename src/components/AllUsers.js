import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "../store";

function AllUsers() {
  const users = useStore(store => store.users);
  const setSelectedUser = useStore(store => store.setSelectedUser);

  return (
    <>
      {users.map(user => (
        <li key={user.id}>
          <Link to="/todos">
            <button
              onClick={() => {
                setSelectedUser(user.id);
              }}
              className="user-selection"
            >
              <h3>{user.name}</h3>
            </button>
          </Link>
        </li>
      ))}
    </>
  );
}

export default styled(AllUsers)``;
