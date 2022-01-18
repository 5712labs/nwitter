import { authService, dbService } from "fbase";
import { useState, useEffect } from "react";
import { useInRouterContext, useNavigate } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {

   // const history = useHistory();
   const navigate = useNavigate();
   const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

   const onLogOutClick = () => {
       authService.signOut();
       navigate("/");
       // history.push("/");
   };

   const onChange = (event) => {
      const {
         target: { value }, 
      } = event;
      setNewDisplayName(value);
   };
   const onSubmit = async (event) => {
      console.log(event);
      event.preventDefault();
      if (userObj.displayName !== newDisplayName) {
         await userObj.updateProfile({ displayName: newDisplayName });
         refreshUser();
      };
   };

   /*
   const getMyNweets = async () => {
      console.log(userObj.uid);
      const nweets = await dbService
      .collection("nweets")
      .where("createdId", "==", userObj.uid)
      .orderBy("createdAt", "asc")
      .get();
      console.log(nweets.docs.map((doc) => doc.data()));
   };

   useEffect(() => {
      getMyNweets();
   }, []);
   */

   return (
      <>
         <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName}></input>
            <input type="submit" value="Update Profile"></input>
         </form>
         <button onClick={onLogOutClick}>Log Out</button>
      </>
   );
}

export default Profile;