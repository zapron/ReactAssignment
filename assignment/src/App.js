import { useState } from "react";
import "./App.css";
import ModalComponent from "./components/ModalComponent";

import LayoutComponent from './components/LayoutComponent';

function App() {
  const adminuser = {
    name: "Janet",
    password:"Weaver",
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(` from main app${details.username}${details.password}`);

    if (details.username === adminuser.name && details.password === adminuser.password) {
      console.log("logged in");
      setUser(details);
    } else {
      console.log("details donot match");
      setError("Wrong UserName or Password has been given");
    }
  };

  const Logout = () => {
    console.log("logout successful");
    setUser({ username: "", password: "" });
    setError("");
  };

  return (

    <div className="App">
      {user.username !== "" ? (
        <div>
          {/* <PageHeader
            className="site-page-header"
            // onBack={() => null}
            title={`WELCOME TO THE ASSIGNMENT ${user.username}`}
          /> */}
          {/* <MenuBar></MenuBar> */}
          <h1>
            Welcome {user.username}
            <button onClick={Logout}>Logout</button>
          </h1>
          <LayoutComponent></LayoutComponent>
        </div>
      ) : (
        <ModalComponent Login={Login} Error={error}></ModalComponent>
      )}
    </div>

  );
}
export default App;
