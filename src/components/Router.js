// import { useState } from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

// const AppRouter = () => {
const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // isLoggedIn = true;
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}></Navigation>}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route exact path = "/" element={<Home userObj={userObj}></Home>}></Route>
                    <Route exact path = "/profile" element={<Profile refreshUser={refreshUser} userObj={userObj}></Profile>}></Route>
                    </>
                ) : (
                    <Route exact path = "/" element={<Auth></Auth>}></Route>
                )}
                {/* <Redirect from="*" to="/" /> */}
                {/* <Route path="*" element={<Navigate to ="/" />}/> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;