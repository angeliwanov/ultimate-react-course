import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Worldwise</h1>
      <AppNav />
      <NavLink to="/app">Go to the App</NavLink>
    </div>
  );
}

export default Homepage;
