import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/contacts"}>Contacts</Link>
      </nav>
      <Outlet />
    </div>
  );
}