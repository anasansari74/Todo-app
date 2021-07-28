import AllUsers from "../components/AllUsers";

export default function LogIn() {
  return (
    <div className="wrapper">
      <h2 className="login-title">Log In!!</h2>
      <ul className="users">
        <AllUsers />
        <li>
          <button className="user-selection" onClick={() => {}}>
            <h3>+ Add a new user</h3>
          </button>
        </li>
      </ul>
    </div>
  );
}
