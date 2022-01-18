import { dbService, storageService } from "fbase";
import { useState } from "react";

const Nweet = ( {nweetObj, isOwner}) => {

    const [editing, SetEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        
        if (ok) {
            // console.log(nweetObj.id);
            // const data = await dbService.doc(`nweets/${nweetObj.id}`);
            // const data = await dbService.doc(`nweets/${nweetObj.id}`).delete();
            // console.log(data);
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            if (nweetObj.attachmentUrl !== "")
                await storageService.refFromURL(nweetObj.attachmentUrl).delete();
        }
    };

    const toggleEditing = () => {
        SetEditing((prev) => !prev);
    };

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewNweet(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        // console.log(nweetObj.id, newNweet);
        await dbService.doc(`nweets/${nweetObj.id}`).update( {text: newNweet});
        SetEditing(false);
    }

    return (
        <div>
            {editing ? (
                <>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={newNweet} required></input>
                    <input type="submit" value="Update Nweet"></input>
                </form>
                <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                <h4>{nweetObj.text}</h4>
                {nweetObj.attachmentUrl && ( 
                    <img src={nweetObj.attachmentUrl} width="50px" height="50px"></img>
                ) }
                {isOwner && (
                    <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button onClick={toggleEditing}>Edit Nweet</button>
                    </>
                )}
                </>
            )}
        </div>
    );
};
export default Nweet;