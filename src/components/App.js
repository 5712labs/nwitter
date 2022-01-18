import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // setIsLoggedIn(user);
        // setUserObj(user);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        // setIsLoggedIn(false);
        setUserObj(false);
      }
      setInit(true);
    });
  }, []);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*
  setInterval(() => {
    console.log(authService.currentUser);  
  }, 2000);
  */

  const refreshUser = () => {
    // setUserObj(authService.currentUser);
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
    {/* {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}></AppRouter> : "initializing..."} */}
    {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj}></AppRouter> : "initializing..."}
      {/* <footer>&copy; {new Date().getFullYear()} Nwitter </footer> */}
    </>
  );
}

export default App;
