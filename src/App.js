import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Dashboard/Index";
import Login from "./Components/Login/Index";
import SignUp from "./Components/Login/SignUp";
import NewUser from "./Components/Users/NewUser";
import UserList from "./Components/Users/UserList";
import ViewUser from "./Components/Users/ViewUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<ViewUser />} />
              <Route path="newuser" element={<NewUser />} />
              <Route
                path="newuser"
                // element={<NewUser inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
