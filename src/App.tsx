
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./page/auth/Login"
import Register from "./page/auth/Register"
import Recovery from "./page/auth/RecoverPassword"
import Terms from "./page/Terms"
import Feeds from ".//page/Feeds"
import Profile from ".//page/Profile"

/* </>  */
/* <Route path="/about" element={<About />} /> */

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/recoverPassword" element={<Recovery />} />
        <Route path="/auth/terms" element={<Terms />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}


export default App
