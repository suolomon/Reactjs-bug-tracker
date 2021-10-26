import { useSelector } from "react-redux";
import Login from "./Views/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewPage from "./Views/pages/viewBugs";
import Sidebar from "./Views/sidebar/sidebar";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <>
           <Sidebar/>
           <Switch>

          <Route path="/viewbugs">
            <ViewPage />
            </Route>
           </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
