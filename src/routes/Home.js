import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";


const Home = ({userObj}) => {
    // console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    /*
    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        // console.log(dbNweets);
        dbNweets.forEach((document) => {
            const nweetObject = { ...document.data(), id: document.id };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    };
    */
   
    useEffect(() => {
        // getNweets();
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ( {
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);

    // console.log(nweets);

    return (
        <>
        <NweetFactory userObj={userObj}></NweetFactory>
        <div>
            {nweets.map((nweet) => (
                // <div key={nweet.id}>
                //     <h4>{nweet.text}</h4>
                // </div>
                <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.createdId === userObj.uid}></Nweet>
            ))}
        </div>
        </>
    );

};

export default Home;